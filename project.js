/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "A02",
  "slug": "delivery-pack",
  "name": "项目交付打包工具",
  "desc": "整理交付文件、版本和使用说明，一次导出完整交付包。",
  "fields": [
    {
      "key": "client",
      "label": "客户称呼",
      "type": "text",
      "value": "示例客户"
    },
    {
      "key": "project",
      "label": "交付项目",
      "type": "text",
      "value": "商品图交付"
    },
    {
      "key": "version",
      "label": "交付版本",
      "type": "text",
      "value": "v1.0"
    },
    {
      "key": "instructions",
      "label": "使用说明",
      "type": "textarea",
      "value": "原图用于后续修改；成品图用于发布。请保留备份。"
    },
    {
      "key": "assets",
      "label": "选择要交付的文件（同名文件将自动编号）",
      "type": "upload",
      "value": [],
      "mode": "binary"
    }
  ],
  "tables": [
    {
      "key": "items",
      "label": "交付文件说明",
      "columns": [
        {
          "key": "file",
          "label": "文件名",
          "type": "text"
        },
        {
          "key": "purpose",
          "label": "用途",
          "type": "text"
        },
        {
          "key": "check",
          "label": "验收要求",
          "type": "text"
        }
      ],
      "rows": [
        {
          "file": "sample-delivery.txt",
          "purpose": "示例交付文件",
          "check": "文字内容完整"
        }
      ]
    }
  ],
  "skill": true,
  "sampleFiles": "delivery",
  "dirname": "delivery-pack",
  "example": {
    "_files": {
      "assets": [
        {
          "name": "sample-delivery.txt",
          "type": "text/plain",
          "size": 24,
          "data": "data:text/plain;base64,56S65L6L5Lqk5LuY5paH5Lu277ya5bey5a6M5oiQ44CCCg=="
        }
      ]
    },
    "client": "示例客户",
    "project": "商品图交付",
    "version": "v1.0",
    "instructions": "原图用于后续修改；成品图用于发布。请保留备份。",
    "items": [
      {
        "file": "sample-delivery.txt",
        "purpose": "示例交付文件",
        "check": "文字内容完整"
      }
    ]
  },
  "inputTitle": "交付内容",
  "outputTitle": "交付清单",
  "action": "生成交付包"
};
