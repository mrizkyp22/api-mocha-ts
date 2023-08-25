const userSchema = {
    type: "object",
    required: ["fullName", "nik", "division", "assignment", "photoProfile", "phoneNumber", "email"],
    properties: {
      fullName: { type: "string" },
      nik: { type: "string" },
      division: { type: "string" },
      assignment: { type: "string" },
      photoProfile: { type: "string" },
      phoneNumber: { type: "string" },
      email: { type: "string" }
    }
  };
  
  const pohSchema = {
    type: "object",
    properties: {
      fullName: { type: "string" },
      nik: { type: "string" },
      division: { type: "string" },
      assignment: { type: "string" },
      photoProfile: { type: "string" }
    }
  };
  
  const commonMetaProperties = {
    type: "object",
    properties: {
      sourceData: { type: "string" },
      page: { type: "integer" },
      size: { type: "integer" },
      totalPage: { type: "integer" },
      totalData: { type: "integer" },
      lastSync: { type: "string" }
    },
    required: ["sourceData", "page", "size", "totalPage", "totalData", "lastSync"]
  };
  
  const commonProperties = {
    code: { type: "integer" },
    success: { type: "boolean" },
    message: { type: "string" },
    meta: { type: "object", properties: {}, required: [] }
  };
  
  const schema_approver_list_200 = {
    type: "object",
    properties: {
      ...commonProperties,
      meta: {
        ...commonMetaProperties,
        properties: {
          ...commonMetaProperties.properties,
          illustrationUrl: { type: "string" },
          message: { type: "string" },
          subMessage: { type: "string" }
        }
      },
      data: {
        type: "array",
        items: {
          type: "object",
          properties: {
            user: { ...userSchema },
            processCount: { type: "integer" },
            poh: { ...pohSchema },
            isActive: { type: "boolean" }
          },
          required: ["user", "processCount", "isActive"]
        }
      }
    },
    required: ["code", "success", "message", "meta", "data"]
  };
  
  export const schema_approver_list_200_search_not_found = {
    type: "object",
    properties: {
      ...commonProperties,
      meta: {
        ...commonMetaProperties,
        properties: {
          ...commonMetaProperties.properties,
          illustrationUrl: { type: "string" },
          message: { type: "string" },
          subMessage: { type: "string" }
        }
      },
      data: { type: "array", items: {} }
    },
    required: ["code", "success", "message", "meta", "data"]
  };
  