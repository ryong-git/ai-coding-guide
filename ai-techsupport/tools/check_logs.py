#!/usr/bin/env python3
"""
CloudWatch 로그 확인 스크립트
Orchestrator Lambda 함수의 최근 로그 조회
"""

import boto3
import json
import time
from datetime import datetime, timedelta

REGION = 'us-east-1'
LOG_GROUP = '/aws/lambda/ai-techsupport-orchestrator'

def get_recent_logs(minutes=10):
    """최근 N분간의 로그 조회"""
    logs = boto3.client('logs', region_name=REGION)
    
    # 시간 범위 설정
    end_time = int(time.time() * 1000)
    start_time = int((time.time() - minutes * 60) * 1000)
    
    print(f"📋 최근 {minutes}분간의 로그 조회 중...")
    print(f"   로그 그룹: {LOG_GROUP}")
    
    try:
        # 로그 스트림 목록
        streams_response = logs.describe_log_streams(
            logGroupName=LOG_GROUP,
            orderBy='LastEventTime',
            descending=True,
            limit=5
        )
        
        if not streams_response.get('logStreams'):
            print("⚠️  로그 스트림을 찾을 수 없습니다.")
            return
        
        print(f"\n✅ {len(streams_response['logStreams'])}개 로그 스트림 발견\n")
        
        # 각 스트림에서 로그 이벤트 조회
        for stream in streams_response['logStreams']:
            stream_name = stream['logStreamName']
            
            print(f"{'='*70}")
            print(f"📝 로그 스트림: {stream_name}")
            print(f"{'='*70}\n")
            
            try:
                events_response = logs.get_log_events(
                    logGroupName=LOG_GROUP,
                    logStreamName=stream_name,
                    startTime=start_time,
                    endTime=end_time,
                    limit=100
                )
                
                events = events_response.get('events', [])
                
                if not events:
                    print("   (로그 이벤트 없음)\n")
                    continue
                
                for event in events:
                    timestamp = datetime.fromtimestamp(event['timestamp'] / 1000)
                    message = event['message'].strip()
                    
                    # 에러 강조
                    if 'ERROR' in message or 'Exception' in message or 'Traceback' in message:
                        print(f"❌ [{timestamp.strftime('%H:%M:%S')}] {message}")
                    elif 'WARNING' in message:
                        print(f"⚠️  [{timestamp.strftime('%H:%M:%S')}] {message}")
                    else:
                        print(f"   [{timestamp.strftime('%H:%M:%S')}] {message}")
                
                print()
                
            except Exception as e:
                print(f"⚠️  스트림 읽기 실패: {str(e)}\n")
        
    except logs.exceptions.ResourceNotFoundException:
        print(f"❌ 로그 그룹을 찾을 수 없습니다: {LOG_GROUP}")
        print(f"   Lambda 함수가 아직 실행되지 않았을 수 있습니다.")
    except Exception as e:
        print(f"❌ 로그 조회 실패: {str(e)}")
        import traceback
        traceback.print_exc()

def main():
    print("=" * 70)
    print("📊 Orchestrator Lambda CloudWatch 로그")
    print("=" * 70)
    print()
    
    get_recent_logs(minutes=10)
    
    return 0

if __name__ == "__main__":
    exit(main())
