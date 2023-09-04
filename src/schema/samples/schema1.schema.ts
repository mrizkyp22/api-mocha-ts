export const generateToken_schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "success": {
        "type": "boolean"
      },
      "code": {
        "type": "integer"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "object",
        "properties": {
          "accessToken": {
            "type": "string"
          }
        },
        "required": ["accessToken"]
      },
      "details": {
        "type": "object",
        "properties": {
          "eventCode": {
            "type": "integer"
          },
          "message": {
            "type": "string"
          }
        }
      }
    },
    "required": ["success", "code", "message", "data", "details"]
  }