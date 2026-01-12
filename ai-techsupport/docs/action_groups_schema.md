# Lambda Action Groups 스키마 정의

## 1. AWS Documentation Search

**목적**: AWS 공식 문서 검색 및 관련 정보 제공

### OpenAPI Schema
```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "AWS Documentation Search API",
    "version": "1.0.0",
    "description": "AWS 공식 문서 및 Knowledge Center 검색"
  },
  "paths": {
    "/search-aws-docs": {
      "post": {
        "summary": "AWS 문서 검색",
        "description": "AWS 공식 문서, Knowledge Center, re:Post를 검색하여 관련 정보 제공",
        "operationId": "searchAwsDocs",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "query": {
                    "type": "string",
                    "description": "검색 쿼리 (예: 'EC2 인스턴스 시작 실패')"
                  },
                  "service": {
                    "type": "string",
                    "description": "AWS 서비스 이름 (선택사항, 예: 'ec2', 's3')"
                  },
                  "max_results": {
                    "type": "integer",
                    "description": "최대 검색 결과 수 (기본값: 5)",
                    "default": 5
                  }
                },
                "required": ["query"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "검색 성공",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "results": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "title": {
                            "type": "string"
                          },
                          "url": {
                            "type": "string"
                          },
                          "snippet": {
                            "type": "string"
                          },
                          "source": {
                            "type": "string",
                            "enum": ["docs", "knowledge-center", "repost"]
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

---

## 2. Customer Resource Query

**목적**: Identity Center SSO를 통한 고객 AWS 계정 리소스 조회

### OpenAPI Schema
```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Customer Resource Query API",
    "version": "1.0.0",
    "description": "고객 AWS 계정의 리소스 상태 조회"
  },
  "paths": {
    "/query-customer-resources": {
      "post": {
        "summary": "고객 리소스 조회",
        "description": "Identity Center SSO를 통해 고객 계정 접근 후 리소스 상태 조회",
        "operationId": "queryCustomerResources",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "customer_id": {
                    "type": "string",
                    "description": "고객 Payer ID 또는 도메인"
                  },
                  "resource_type": {
                    "type": "string",
                    "description": "조회할 리소스 타입",
                    "enum": ["ec2", "rds", "s3", "cloudwatch-logs", "cost"]
                  },
                  "resource_id": {
                    "type": "string",
                    "description": "특정 리소스 ID (선택사항)"
                  },
                  "query_params": {
                    "type": "object",
                    "description": "추가 쿼리 파라미터 (예: 시간 범위, 필터)"
                  }
                },
                "required": ["customer_id", "resource_type"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "조회 성공",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string"
                    },
                    "resources": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    },
                    "summary": {
                      "type": "string",
                      "description": "리소스 상태 요약"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

---

## 3. Answer Review

**목적**: AI 답변 품질 검토 및 개선 제안

### OpenAPI Schema
```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Answer Review API",
    "version": "1.0.0",
    "description": "AI 답변 검토 및 품질 평가"
  },
  "paths": {
    "/review-answer": {
      "post": {
        "summary": "답변 검토",
        "description": "답변의 정확성, 완성도, 톤앤매너를 검토하고 점수 부여",
        "operationId": "reviewAnswer",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "원본 질문"
                  },
                  "answer": {
                    "type": "string",
                    "description": "검토할 답변"
                  },
                  "context": {
                    "type": "object",
                    "description": "추가 컨텍스트 (고객 정보, 티켓 정보 등)"
                  }
                },
                "required": ["question", "answer"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "검토 완료",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "score": {
                      "type": "integer",
                      "description": "전체 점수 (0-100)"
                    },
                    "accuracy": {
                      "type": "integer",
                      "description": "정확성 점수 (0-100)"
                    },
                    "completeness": {
                      "type": "integer",
                      "description": "완성도 점수 (0-100)"
                    },
                    "tone": {
                      "type": "integer",
                      "description": "톤앤매너 점수 (0-100)"
                    },
                    "feedback": {
                      "type": "string",
                      "description": "개선 제안"
                    },
                    "should_improve": {
                      "type": "boolean",
                      "description": "재생성 필요 여부 (점수 < 80)"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```
