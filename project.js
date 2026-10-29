/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "B03",
  "slug": "supplier-compare",
  "name": "供应商采购报价对比器",
  "desc": "按计划采购量比较起订条件、整单支出和单件成本。",
  "fields": [
    {
      "key": "quantity",
      "label": "计划采购数量",
      "type": "number",
      "value": 100,
      "min": 1
    }
  ],
  "tables": [
    {
      "key": "items",
      "label": "供应商报价",
      "columns": [
        {
          "key": "supplier",
          "label": "供应商",
          "type": "text"
        },
        {
          "key": "price",
          "label": "单价（元）",
          "type": "number"
        },
        {
          "key": "moq",
          "label": "起订量",
          "type": "number"
        },
        {
          "key": "shipping",
          "label": "整单运费（元）",
          "type": "number"
        },
        {
          "key": "days",
          "label": "交期（天）",
          "type": "number"
        },
        {
          "key": "payment",
          "label": "付款条件",
          "type": "text"
        }
      ],
      "rows": [
        {
          "supplier": "示例供应商甲",
          "price": 22,
          "moq": 100,
          "shipping": 80,
          "days": 7,
          "payment": "30%预付"
        },
        {
          "supplier": "示例供应商乙",
          "price": 20,
          "moq": 200,
          "shipping": 100,
          "days": 10,
          "payment": "全款"
        }
      ]
    }
  ],
  "dirname": "supplier-compare",
  "example": {
    "_files": {},
    "quantity": 100,
    "items": [
      {
        "supplier": "示例供应商甲",
        "price": 22,
        "moq": 100,
        "shipping": 80,
        "days": 7,
        "payment": "30%预付"
      },
      {
        "supplier": "示例供应商乙",
        "price": 20,
        "moq": 200,
        "shipping": 100,
        "days": 10,
        "payment": "全款"
      }
    ]
  },
  "inputTitle": "采购计划与报价",
  "outputTitle": "采购方案对比",
  "action": "对比报价"
};
