/***************************************************************
* This file is encoded in UTF-8
***************************************************************/

var getTestData = function(){
	var testData = [
		
		{
		    name    : "Alpha Numeric",
			type    : "alphanum",
			options : "alphanum",
			data    : [
				[ " aAzZ09é.,$£€", " aAzZ09é" ],
				[ " ",         " "      ],
				[ "",          ""      ]
			]
		},
		
		{
		    name    : "allow = '*+'     \t disallow = 'xy'",
			type    : "alphanum",
			options : {
				allow:    "*+",
				disallow: "xy"
			},
			data    : [
				[ "*+", "*+" ],
				[ "xy",         ""      ],
				[ "",          ""      ]
			]
		},
		
		{
		    name    : "allowSpace = false",
			type    : "alphanum",
			options : {
				allowSpace:    false
			},
			data    : [
				[ "   ", "" ]
			]
		},
		
		{
		    name    : "allowNumeric = false",
			type    : "alphanum",
			options : {
				allowNumeric: false
			},
			data    : [
				[ "a123z", "az" ]
			]
		},
		
		{
		    name    : "allowUpper = false",
			type    : "alphanum",
			options : {
				allowUpper: false
			},
			data    : [
				[ "abcABC", "abc" ]
			]
		},
		
		{
		    name    : "allowLower = false",
			type    : "alphanum",
			options : {
				allowLower: false
			},
			data    : [
				[ "abcABC", "ABC" ]
			]
		},
		
		{
		    name    : "allowCaseless = false",
			type    : "alphanum",
			options : {
				allowCaseless: false
			},
			data    : [
				[ "الصغرى", "" ]
			]
		},
		
		{
		    name    : "allowLatin = false",
			type    : "alphanum",
			options : {
				allowLatin: false
			},
			data    : [
				[ "abcABCáéó", "áéó" ]
			]
		},
		
		{
		    name    : "allowOtherCharSets = false",
			type    : "alphanum",
			options : {
				allowOtherCharSets: false
			},
			data    : [
				[ "aáéób", "ab" ],
				[ "الصغرى", "" ],
				[ "维基百科关于中文维基百科", "" ]
			]
		},
		
		
		
		{
			name: "Alphabetic",
			type    : "alphanum",
			options: "alpha",
			data: [
				[ "aAzZ09.,$", "aAzZ" ],
				[ " ",         " "    ]
			]
		},
		
		{
			name: "Numeric",
			type    : "numeric",
			options:  "numeric",
			data : [
				[ "a1Az,Z094$.()4€5",   "1,094.45"   ],
				[ ".,",         ".,"    ]
			]
		},
		
		{
			name: "Numeric Max Digits / Decimals",
			type    : "numeric",
			options:  {
				maxDigits: 5,
				maxDecimalPlaces: 2
			},
			data : [
				[ "1.1234",   "1.12"  ],
				[ "1234567",  "12345" ],
				[ "1234.567", "1234.5"]
			]
		},
		
		{
			name: "Max pre-decimal places",
			type    : "numeric",
			options:  {
				maxPreDecimalPlaces: 2,
				maxDecimalPlaces: 2
			},
			data : [
				[ "123",  "12" ],
				[ "123.123",   "12.12"  ]
			]
		},
		
		{
			name: "Disallow Plus & Minus signs",
			type    : "numeric",
			options:  {
				allowPlus:  false,
				allowMinus: false
			},
			data : [
				[ "+-",   ""  ],
				[ "+123", "123" ],
				[ "-123", "123"]
			]
		},
		
		{
			name: "Allow Plus & Minus signs",
			type    : "numeric",
			options:  {
				allowPlus:  true,
				allowMinus: true
			},
			data : [
				[ "+-",   "+"  ],
				[ "-+",   "-"  ],
				[ "+123", "+123" ],
				[ "-123", "-123"]
			]
		},
		
		{
			name: "Allow Minus, Disallow Plus",
			type    : "numeric",
			options:  {
				allowPlus:  false,
				allowMinus: true
			},
			data : [
				[ "+-",   "-"  ],
				[ "+123", "123" ],
				[ "-123", "-123"]
			]
		},
		
		{
			name: "Integer",
			type    : "numeric",
			options:  "integer",
			data : [
				[ "+123",     "123"  ],
				[ "-123",     "-123" ],
				[ "1,234.56", "123456"]
			]
		},
		
		{
			name: "Positive Integer",
			type    : "numeric",
			options:  "positiveInteger",
			data : [
				[ "+123",     "123"  ],
				[ "-123",     "123" ],
				[ "1,234.56", "123456"]
			]
		},
		
		{
			name: "Decimal Point",
			type    : "numeric",
			data : [
				[ "1..23",     "1.23"  ],
				[ "1.2.3",     "1.23" ]
			]
		},
		
		{
			name: "Max & Min: -5 to 5",
			type    : "numeric",
			options : {
				max : 5,
				min : -5
			},
			data : [
				[ '4',   '4'  ],
				[ '5',   '5'  ],
				[ '6',   ''   ],
				[ '10',  '1'  ],
				[ '0',   '0'  ],
				[ '-4',  '-4' ],
				[ '-5',  '-5' ],
				[ '-6',  '-'  ],
				[ '-10', '-1' ]
			]
		},
		
		{
			name: "Max & Min: -5.8 to 5.8",
			type    : "numeric",
			options : {
				max : 5.8,
				min : -5.8
			},
			data : [
				[ '5',     '5'     ],
				[ '5.55',  '5.55'  ],
				[ '5.85',  '5.8'   ],
				[ '5.9',   '5.'    ],
				[ '6',     ''      ],
				[ '0',     '0'     ],
				[ '0.0',   '0.0'   ],
				[ '-0.01', '-0.01' ],
				[ '-5',    '-5'    ],
				[ '-5.75', '-5.75' ],
				[ '-5.8',  '-5.8'  ],
				[ '-5.85', '-5.8'  ],
				[ '-6',    '-'     ]
			]
		}
	];
	
	return testData;
}