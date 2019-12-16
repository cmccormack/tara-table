const data = {
	"meta": {
		"ranks": {
			"Superkingdom": { "level": 1, "color": "blue" },
			"Phylum": { "level": 2, "color": "blue lighten-1" },
			"Order": { "level": 3, "color": "blue lighten-2" },
			"Class": { "level": 4, "color": "blue lighten-3" },
			"Family": { "level": 5, "color": "blue lighten-4" },
			"Genus": { "level": 6, "color": "blue lighten-5" },
			"Species": { "level": 7, "color": "white" },
		}
	},
	"name": "root",
	"values": [
		{ header: "Scientific Name", propName: "Scientific_Name", colWidth: 2, colIndex: 0 },
		{ header: "Taxa ID", propName: "TaxID", colWidth: 1, colIndex: 1 },
		{ header: "Level", propName: "Level", colWidth: 1, colIndex: 2 },
		{ header: "Total Hits", propName: "Total_Hits", colWidth: 1, colIndex: 3 },
		{ header: "Unique Hits", propName: "Unique_Hits", colWidth: 1, colIndex: 4 },
		{ header: "Signature Hits", propName: "Signature_Hits", colWidth: 1, colIndex: 5 },
		{ header: "Unique Signature Hits", propName: "Unique_Signature_Hits", colWidth: 1, colIndex: 6 },
		{ header: "Weighted Support", propName: "Weighted_Support", colWidth: 1, colIndex: 7 },
		{ header: "Unique Weighted Support", propName: "Unique_Weighted_Support", colWidth: 1, colIndex: 8 },
		{ header: "P Value", propName: "P_value", colWidth: 1, colIndex: 9 },
		{ header: "Significant", propName: "Significant", colWidth: 1, colIndex: 10 }
	],

	"children": [
		{
			"values": {
				"Scientific_Name": "Bacteria",
				"TaxID": 2,
				"Level": "Superkingdom",
				"Total_Hits": 1905195,
				"Unique_Hits": 1010347,
				"Signature_Hits": 1904708,
				"Unique_Signature_Hits": 1010071,
				"Weighted_Support": 1904922,
				"Unique_Weighted_Support": 1010204,
				"P_value": "",
				"Significant": ""
			},
			"children": [
				{
					"values": {
						"Scientific_Name": "Proteobacteria",
						"TaxID": 1224,
						"Level": "Phylum",
						"Total_Hits": 1885494,
						"Unique_Hits": 990662,
						"Signature_Hits": 1880735,
						"Unique_Signature_Hits": 988296,
						"Weighted_Support": 1882885,
						"Unique_Weighted_Support": 989381,
						"P_value": "",
						"Significant": ""
					},
					"children": [
						{
							"values": {
								"Scientific_Name": "Gammaproteobacteria",
								"TaxID": 1236,
								"Level": "Class",
								"Total_Hits": 1885442,
								"Unique_Hits": 990610,
								"Signature_Hits": 1877970,
								"Unique_Signature_Hits": 987007,
								"Weighted_Support": 1881207,
								"Unique_Weighted_Support": 988580,
								"P_value": "",
								"Significant": ""
							},
							"children": [
								{
									"values": {
										"Scientific_Name": "Thiotrichales",
										"TaxID": 72273,
										"Level": "Order",
										"Total_Hits": 1885269,
										"Unique_Hits": 990578,
										"Signature_Hits": 1872396,
										"Unique_Signature_Hits": 984288,
										"Weighted_Support": 1877248,
										"Unique_Weighted_Support": 986717,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Francisellaceae",
												"TaxID": 34064,
												"Level": "Family",
												"Total_Hits": 1885264,
												"Unique_Hits": 990573,
												"Signature_Hits": 1872194,
												"Unique_Signature_Hits": 984192,
												"Weighted_Support": 1876935,
												"Unique_Weighted_Support": 986572,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Francisella",
														"TaxID": 262,
														"Level": "Genus",
														"Total_Hits": 1885264,
														"Unique_Hits": 990573,
														"Signature_Hits": 1846573,
														"Unique_Signature_Hits": 971577,
														"Weighted_Support": 1863677,
														"Unique_Weighted_Support": 980059,
														"P_value": 0.00000372,
														"Significant": "TRUE"
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Francisella tularensis",
																"TaxID": 263,
																"Level": "Species",
																"Total_Hits": 1885250,
																"Unique_Hits": 990559,
																"Signature_Hits": 721388,
																"Unique_Signature_Hits": 380432,
																"Weighted_Support": 1155669,
																"Unique_Weighted_Support": 609957,
																"P_value": 0.0,
																"Significant": "TRUE"
															},
															"children": []
														},
														{
															"values": {
																"Scientific_Name": "Francisella sp. MA067296",
																"TaxID": 475375,
																"Level": "Species",
																"Total_Hits": 396373,
																"Unique_Hits": 207309,
																"Signature_Hits": 3,
																"Unique_Signature_Hits": 3,
																"Weighted_Support": 113093,
																"Unique_Weighted_Support": 59787,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														},
														{
															"values": {
																"Scientific_Name": "Francisella persica",
																"TaxID": 954,
																"Level": "Species",
																"Total_Hits": 346172,
																"Unique_Hits": 182026,
																"Signature_Hits": 3,
																"Unique_Signature_Hits": 3,
																"Weighted_Support": 96670,
																"Unique_Weighted_Support": 51309,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														},
														{
															"values": {
																"Scientific_Name": "Francisella philomiragia",
																"TaxID": 28110,
																"Level": "Species",
																"Total_Hits": 281513,
																"Unique_Hits": 135358,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 68971,
																"Unique_Weighted_Support": 32559,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														},
														{
															"values": {
																"Scientific_Name": "Francisella noatunensis",
																"TaxID": 657445,
																"Level": "Species",
																"Total_Hits": 216274,
																"Unique_Hits": 113108,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 46165,
																"Unique_Weighted_Support": 24475,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														},
														{
															"values": {
																"Scientific_Name": "Francisella sp. TX077310",
																"TaxID": 573570,
																"Level": "Species",
																"Total_Hits": 81729,
																"Unique_Hits": 36692,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 14637,
																"Unique_Weighted_Support": 6518,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														},
														{
															"values": {
																"Scientific_Name": "Francisella halioticida",
																"TaxID": 549298,
																"Level": "Species",
																"Total_Hits": 53901,
																"Unique_Hits": 26557,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 8521,
																"Unique_Weighted_Support": 4353,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										},
										{
											"values": {
												"Scientific_Name": "Piscirickettsiaceae",
												"TaxID": 135616,
												"Level": "Family",
												"Total_Hits": 1044,
												"Unique_Hits": 452,
												"Signature_Hits": 1,
												"Unique_Signature_Hits": 1,
												"Weighted_Support": 185,
												"Unique_Weighted_Support": 84,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Piscirickettsia",
														"TaxID": 1237,
														"Level": "Genus",
														"Total_Hits": 313,
														"Unique_Hits": 158,
														"Signature_Hits": 1,
														"Unique_Signature_Hits": 1,
														"Weighted_Support": 57,
														"Unique_Weighted_Support": 31,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Piscirickettsia salmonis",
																"TaxID": 1238,
																"Level": "Species",
																"Total_Hits": 313,
																"Unique_Hits": 158,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 23,
																"Unique_Weighted_Support": 13,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								},
								{
									"values": {
										"Scientific_Name": "Pasteurellales",
										"TaxID": 135625,
										"Level": "Order",
										"Total_Hits": 1096,
										"Unique_Hits": 514,
										"Signature_Hits": 2,
										"Unique_Signature_Hits": 2,
										"Weighted_Support": 282,
										"Unique_Weighted_Support": 140,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Pasteurellaceae",
												"TaxID": 712,
												"Level": "Family",
												"Total_Hits": 1096,
												"Unique_Hits": 514,
												"Signature_Hits": 2,
												"Unique_Signature_Hits": 2,
												"Weighted_Support": 266,
												"Unique_Weighted_Support": 133,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Haemophilus",
														"TaxID": 724,
														"Level": "Genus",
														"Total_Hits": 545,
														"Unique_Hits": 271,
														"Signature_Hits": 2,
														"Unique_Signature_Hits": 2,
														"Weighted_Support": 119,
														"Unique_Weighted_Support": 61,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Haemophilus influenzae",
																"TaxID": 727,
																"Level": "Species",
																"Total_Hits": 352,
																"Unique_Hits": 170,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 35,
																"Unique_Weighted_Support": 18,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								},
								{
									"values": {
										"Scientific_Name": "Pseudomonadales",
										"TaxID": 72274,
										"Level": "Order",
										"Total_Hits": 2066,
										"Unique_Hits": 963,
										"Signature_Hits": 1,
										"Unique_Signature_Hits": 1,
										"Weighted_Support": 626,
										"Unique_Weighted_Support": 304,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Pseudomonadaceae",
												"TaxID": 135621,
												"Level": "Family",
												"Total_Hits": 512,
												"Unique_Hits": 219,
												"Signature_Hits": 1,
												"Unique_Signature_Hits": 1,
												"Weighted_Support": 93,
												"Unique_Weighted_Support": 42,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Pseudomonas",
														"TaxID": 286,
														"Level": "Genus",
														"Total_Hits": 427,
														"Unique_Hits": 171,
														"Signature_Hits": 1,
														"Unique_Signature_Hits": 1,
														"Weighted_Support": 60,
														"Unique_Weighted_Support": 26,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Pseudomonas stutzeri",
																"TaxID": 316,
																"Level": "Species",
																"Total_Hits": 48,
																"Unique_Hits": 20,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 3,
																"Unique_Weighted_Support": 2,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								},
								{
									"values": {
										"Scientific_Name": "Alteromonadales",
										"TaxID": 135622,
										"Level": "Order",
										"Total_Hits": 2774,
										"Unique_Hits": 1342,
										"Signature_Hits": 1,
										"Unique_Signature_Hits": 1,
										"Weighted_Support": 843,
										"Unique_Weighted_Support": 420,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Idiomarinaceae",
												"TaxID": 267893,
												"Level": "Family",
												"Total_Hits": 181,
												"Unique_Hits": 82,
												"Signature_Hits": 1,
												"Unique_Signature_Hits": 1,
												"Weighted_Support": 29,
												"Unique_Weighted_Support": 16,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Idiomarina",
														"TaxID": 135575,
														"Level": "Genus",
														"Total_Hits": 181,
														"Unique_Hits": 82,
														"Signature_Hits": 1,
														"Unique_Signature_Hits": 1,
														"Weighted_Support": 25,
														"Unique_Weighted_Support": 14,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Idiomarina loihiensis",
																"TaxID": 135577,
																"Level": "Species",
																"Total_Hits": 26,
																"Unique_Hits": 18,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 5,
																"Unique_Weighted_Support": 4,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"values": {
						"Scientific_Name": "Firmicutes",
						"TaxID": 1239,
						"Level": "Phylum",
						"Total_Hits": 22233,
						"Unique_Hits": 20922,
						"Signature_Hits": 19554,
						"Unique_Signature_Hits": 19538,
						"Weighted_Support": 20702,
						"Unique_Weighted_Support": 20151,
						"P_value": "",
						"Significant": ""
					},
					"children": [
						{
							"values": {
								"Scientific_Name": "Bacilli",
								"TaxID": 91061,
								"Level": "Class",
								"Total_Hits": 21260,
								"Unique_Hits": 20420,
								"Signature_Hits": 19523,
								"Unique_Signature_Hits": 19507,
								"Weighted_Support": 20160,
								"Unique_Weighted_Support": 19867,
								"P_value": "",
								"Significant": ""
							},
							"children": [
								{
									"values": {
										"Scientific_Name": "Bacillales",
										"TaxID": 1385,
										"Level": "Order",
										"Total_Hits": 20730,
										"Unique_Hits": 20201,
										"Signature_Hits": 19496,
										"Unique_Signature_Hits": 19480,
										"Weighted_Support": 19911,
										"Unique_Weighted_Support": 19734,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Bacillaceae",
												"TaxID": 186817,
												"Level": "Family",
												"Total_Hits": 20217,
												"Unique_Hits": 19938,
												"Signature_Hits": 19340,
												"Unique_Signature_Hits": 19324,
												"Weighted_Support": 19635,
												"Unique_Weighted_Support": 19551,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Bacillus",
														"TaxID": 1386,
														"Level": "Genus",
														"Total_Hits": 20072,
														"Unique_Hits": 19867,
														"Signature_Hits": 19264,
														"Unique_Signature_Hits": 19248,
														"Weighted_Support": 19514,
														"Unique_Weighted_Support": 19461,
														"P_value": 0.0,
														"Significant": "TRUE"
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Bacillus anthracis",
																"TaxID": 1392,
																"Level": "Species",
																"Total_Hits": 19765,
																"Unique_Hits": 19714,
																"Signature_Hits": 266,
																"Unique_Signature_Hits": 266,
																"Weighted_Support": 4206,
																"Unique_Weighted_Support": 4202,
																"P_value": 0.0,
																"Significant": "TRUE"
															},
															"children": []
														},
														{
															"values": {
																"Scientific_Name": "Bacillus cereus",
																"TaxID": 1396,
																"Level": "Species",
																"Total_Hits": 19399,
																"Unique_Hits": 19345,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 3889,
																"Unique_Weighted_Support": 3885,
																"P_value": 1.0,
																"Significant": "FALSE"
															},
															"children": []
														}
													]
												}
											]
										},
										{
											"values": {
												"Scientific_Name": "Staphylococcaceae",
												"TaxID": 90964,
												"Level": "Family",
												"Total_Hits": 531,
												"Unique_Hits": 298,
												"Signature_Hits": 1,
												"Unique_Signature_Hits": 1,
												"Weighted_Support": 167,
												"Unique_Weighted_Support": 96,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Staphylococcus",
														"TaxID": 1279,
														"Level": "Genus",
														"Total_Hits": 467,
														"Unique_Hits": 257,
														"Signature_Hits": 1,
														"Unique_Signature_Hits": 1,
														"Weighted_Support": 132,
														"Unique_Weighted_Support": 73,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Staphylococcus condimenti",
																"TaxID": 70255,
																"Level": "Species",
																"Total_Hits": 42,
																"Unique_Hits": 20,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 3,
																"Unique_Weighted_Support": 2,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							"values": {
								"Scientific_Name": "Negativicutes",
								"TaxID": 909932,
								"Level": "Class",
								"Total_Hits": 102,
								"Unique_Hits": 48,
								"Signature_Hits": 1,
								"Unique_Signature_Hits": 1,
								"Weighted_Support": 30,
								"Unique_Weighted_Support": 15,
								"P_value": "",
								"Significant": ""
							},
							"children": [
								{
									"values": {
										"Scientific_Name": "Veillonellales",
										"TaxID": 1843489,
										"Level": "Order",
										"Total_Hits": 48,
										"Unique_Hits": 27,
										"Signature_Hits": 1,
										"Unique_Signature_Hits": 1,
										"Weighted_Support": 13,
										"Unique_Weighted_Support": 8,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Veillonellaceae",
												"TaxID": 31977,
												"Level": "Family",
												"Total_Hits": 48,
												"Unique_Hits": 27,
												"Signature_Hits": 1,
												"Unique_Signature_Hits": 1,
												"Weighted_Support": 12,
												"Unique_Weighted_Support": 8,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Negativicoccus",
														"TaxID": 909928,
														"Level": "Genus",
														"Total_Hits": 4,
														"Unique_Hits": 4,
														"Signature_Hits": 1,
														"Unique_Signature_Hits": 1,
														"Weighted_Support": 2,
														"Unique_Weighted_Support": 2,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Negativicoccus massiliensis",
																"TaxID": 1702287,
																"Level": "Species",
																"Total_Hits": 4,
																"Unique_Hits": 4,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 2,
																"Unique_Weighted_Support": 2,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"values": {
						"Scientific_Name": "Actinobacteria",
						"TaxID": 201174,
						"Level": "Phylum",
						"Total_Hits": 297,
						"Unique_Hits": 85,
						"Signature_Hits": 1,
						"Unique_Signature_Hits": 1,
						"Weighted_Support": 80,
						"Unique_Weighted_Support": 30,
						"P_value": "",
						"Significant": ""
					},
					"children": [
						{
							"values": {
								"Scientific_Name": "Actinobacteria",
								"TaxID": 1760,
								"Level": "Class",
								"Total_Hits": 265,
								"Unique_Hits": 71,
								"Signature_Hits": 1,
								"Unique_Signature_Hits": 1,
								"Weighted_Support": 53,
								"Unique_Weighted_Support": 21,
								"P_value": "",
								"Significant": ""
							},
							"children": [
								{
									"values": {
										"Scientific_Name": "Micromonosporales",
										"TaxID": 85008,
										"Level": "Order",
										"Total_Hits": 159,
										"Unique_Hits": 18,
										"Signature_Hits": 1,
										"Unique_Signature_Hits": 1,
										"Weighted_Support": 11,
										"Unique_Weighted_Support": 2,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Micromonosporaceae",
												"TaxID": 28056,
												"Level": "Family",
												"Total_Hits": 159,
												"Unique_Hits": 18,
												"Signature_Hits": 1,
												"Unique_Signature_Hits": 1,
												"Weighted_Support": 9,
												"Unique_Weighted_Support": 2,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Plantactinospora",
														"TaxID": 673534,
														"Level": "Genus",
														"Total_Hits": 159,
														"Unique_Hits": 18,
														"Signature_Hits": 1,
														"Unique_Signature_Hits": 1,
														"Weighted_Support": 8,
														"Unique_Weighted_Support": 2,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Plantactinospora sp. BB1",
																"TaxID": 2071627,
																"Level": "Species",
																"Total_Hits": 159,
																"Unique_Hits": 18,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 6,
																"Unique_Weighted_Support": 2,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"values": {
						"Scientific_Name": "Fusobacteria",
						"TaxID": 32066,
						"Level": "Phylum",
						"Total_Hits": 158,
						"Unique_Hits": 103,
						"Signature_Hits": 1,
						"Unique_Signature_Hits": 1,
						"Weighted_Support": 63,
						"Unique_Weighted_Support": 40,
						"P_value": "",
						"Significant": ""
					},
					"children": [
						{
							"values": {
								"Scientific_Name": "Fusobacteriia",
								"TaxID": 203490,
								"Level": "Class",
								"Total_Hits": 158,
								"Unique_Hits": 103,
								"Signature_Hits": 1,
								"Unique_Signature_Hits": 1,
								"Weighted_Support": 59,
								"Unique_Weighted_Support": 38,
								"P_value": "",
								"Significant": ""
							},
							"children": [
								{
									"values": {
										"Scientific_Name": "Fusobacteriales",
										"TaxID": 203491,
										"Level": "Order",
										"Total_Hits": 158,
										"Unique_Hits": 103,
										"Signature_Hits": 1,
										"Unique_Signature_Hits": 1,
										"Weighted_Support": 57,
										"Unique_Weighted_Support": 36,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Fusobacteriaceae",
												"TaxID": 203492,
												"Level": "Family",
												"Total_Hits": 112,
												"Unique_Hits": 72,
												"Signature_Hits": 1,
												"Unique_Signature_Hits": 1,
												"Weighted_Support": 44,
												"Unique_Weighted_Support": 27,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Ilyobacter",
														"TaxID": 167639,
														"Level": "Genus",
														"Total_Hits": 2,
														"Unique_Hits": 2,
														"Signature_Hits": 1,
														"Unique_Signature_Hits": 1,
														"Weighted_Support": 1,
														"Unique_Weighted_Support": 1,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Ilyobacter polytropus",
																"TaxID": 167642,
																"Level": "Species",
																"Total_Hits": 2,
																"Unique_Hits": 2,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 1,
																"Unique_Weighted_Support": 1,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"values": {
				"Scientific_Name": "Viruses",
				"TaxID": 10239,
				"Level": "Superkingdom",
				"Total_Hits": 352,
				"Unique_Hits": 205,
				"Signature_Hits": 2,
				"Unique_Signature_Hits": 2,
				"Weighted_Support": 149,
				"Unique_Weighted_Support": 99,
				"P_value": "",
				"Significant": ""
			},
			"children": [
				{
					"values": {
						"Scientific_Name": "Phytophthora infestans RNA virus 1",
						"TaxID": 640897,
						"Level": "Species",
						"Total_Hits": 18,
						"Unique_Hits": 18,
						"Signature_Hits": 6,
						"Unique_Signature_Hits": 6,
						"Weighted_Support": 7,
						"Unique_Weighted_Support": 7,
						"P_value": "",
						"Significant": ""
					},
					"children": [
						{
							"values": {
								"Scientific_Name": "Phytophthora infestans RNA virus 1",
								"TaxID": 640897,
								"Level": "Species",
								"Total_Hits": 18,
								"Unique_Hits": 18,
								"Signature_Hits": 6,
								"Unique_Signature_Hits": 6,
								"Weighted_Support": 7,
								"Unique_Weighted_Support": 7,
								"P_value": "",
								"Significant": ""
							},
							"children": [
								{
									"values": {
										"Scientific_Name": "Phytophthora infestans RNA virus 1",
										"TaxID": 640897,
										"Level": "Species",
										"Total_Hits": 18,
										"Unique_Hits": 18,
										"Signature_Hits": 6,
										"Unique_Signature_Hits": 6,
										"Weighted_Support": 7,
										"Unique_Weighted_Support": 7,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Phytophthora infestans RNA virus 1",
												"TaxID": 640897,
												"Level": "Species",
												"Total_Hits": 18,
												"Unique_Hits": 18,
												"Signature_Hits": 6,
												"Unique_Signature_Hits": 6,
												"Weighted_Support": 7,
												"Unique_Weighted_Support": 7,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Phytophthora infestans RNA virus 1",
														"TaxID": 640897,
														"Level": "Species",
														"Total_Hits": 18,
														"Unique_Hits": 18,
														"Signature_Hits": 6,
														"Unique_Signature_Hits": 6,
														"Weighted_Support": 7,
														"Unique_Weighted_Support": 7,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Phytophthora infestans RNA virus 1",
																"TaxID": 640897,
																"Level": "Species",
																"Total_Hits": 18,
																"Unique_Hits": 18,
																"Signature_Hits": 6,
																"Unique_Signature_Hits": 6,
																"Weighted_Support": 7,
																"Unique_Weighted_Support": 7,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"values": {
				"Scientific_Name": "Eukaryota",
				"TaxID": 2759,
				"Level": "Superkingdom",
				"Total_Hits": 216,
				"Unique_Hits": 64,
				"Signature_Hits": 12,
				"Unique_Signature_Hits": 12,
				"Weighted_Support": 85,
				"Unique_Weighted_Support": 33,
				"P_value": "",
				"Significant": ""
			},
			"children": [
				{
					"values": {
						"Scientific_Name": "Apicomplexa",
						"TaxID": 5794,
						"Level": "Phylum",
						"Total_Hits": 29,
						"Unique_Hits": 26,
						"Signature_Hits": 4,
						"Unique_Signature_Hits": 4,
						"Weighted_Support": 10,
						"Unique_Weighted_Support": 10,
						"P_value": "",
						"Significant": ""
					},
					"children": [
						{
							"values": {
								"Scientific_Name": "Aconoidasida",
								"TaxID": 422676,
								"Level": "Class",
								"Total_Hits": 29,
								"Unique_Hits": 26,
								"Signature_Hits": 4,
								"Unique_Signature_Hits": 4,
								"Weighted_Support": 10,
								"Unique_Weighted_Support": 9,
								"P_value": "",
								"Significant": ""
							},
							"children": [
								{
									"values": {
										"Scientific_Name": "Haemosporida",
										"TaxID": 5819,
										"Level": "Order",
										"Total_Hits": 29,
										"Unique_Hits": 26,
										"Signature_Hits": 4,
										"Unique_Signature_Hits": 4,
										"Weighted_Support": 10,
										"Unique_Weighted_Support": 9,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Plasmodiidae",
												"TaxID": 1639119,
												"Level": "Family",
												"Total_Hits": 29,
												"Unique_Hits": 26,
												"Signature_Hits": 4,
												"Unique_Signature_Hits": 4,
												"Weighted_Support": 10,
												"Unique_Weighted_Support": 9,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Plasmodium",
														"TaxID": 5820,
														"Level": "Genus",
														"Total_Hits": 29,
														"Unique_Hits": 26,
														"Signature_Hits": 4,
														"Unique_Signature_Hits": 4,
														"Weighted_Support": 10,
														"Unique_Weighted_Support": 9,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Plasmodium falciparum",
																"TaxID": 5833,
																"Level": "Species",
																"Total_Hits": 29,
																"Unique_Hits": 26,
																"Signature_Hits": 4,
																"Unique_Signature_Hits": 4,
																"Weighted_Support": 9,
																"Unique_Weighted_Support": 8,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"values": {
						"Scientific_Name": "Ascomycota",
						"TaxID": 4890,
						"Level": "Phylum",
						"Total_Hits": 200,
						"Unique_Hits": 51,
						"Signature_Hits": 1,
						"Unique_Signature_Hits": 1,
						"Weighted_Support": 40,
						"Unique_Weighted_Support": 16,
						"P_value": "",
						"Significant": ""
					},
					"children": [
						{
							"values": {
								"Scientific_Name": "Saccharomycetes",
								"TaxID": 4891,
								"Level": "Class",
								"Total_Hits": 196,
								"Unique_Hits": 47,
								"Signature_Hits": 1,
								"Unique_Signature_Hits": 1,
								"Weighted_Support": 29,
								"Unique_Weighted_Support": 12,
								"P_value": "",
								"Significant": ""
							},
							"children": [
								{
									"values": {
										"Scientific_Name": "Saccharomycetales",
										"TaxID": 4892,
										"Level": "Order",
										"Total_Hits": 196,
										"Unique_Hits": 47,
										"Signature_Hits": 1,
										"Unique_Signature_Hits": 1,
										"Weighted_Support": 22,
										"Unique_Weighted_Support": 11,
										"P_value": "",
										"Significant": ""
									},
									"children": [
										{
											"values": {
												"Scientific_Name": "Pichiaceae",
												"TaxID": 1156497,
												"Level": "Family",
												"Total_Hits": 167,
												"Unique_Hits": 24,
												"Signature_Hits": 1,
												"Unique_Signature_Hits": 1,
												"Weighted_Support": 13,
												"Unique_Weighted_Support": 5,
												"P_value": "",
												"Significant": ""
											},
											"children": [
												{
													"values": {
														"Scientific_Name": "Pichia",
														"TaxID": 4919,
														"Level": "Genus",
														"Total_Hits": 167,
														"Unique_Hits": 24,
														"Signature_Hits": 1,
														"Unique_Signature_Hits": 1,
														"Weighted_Support": 12,
														"Unique_Weighted_Support": 5,
														"P_value": "",
														"Significant": ""
													},
													"children": [
														{
															"values": {
																"Scientific_Name": "Pichia kudriavzevii",
																"TaxID": 4909,
																"Level": "Species",
																"Total_Hits": 167,
																"Unique_Hits": 24,
																"Signature_Hits": 1,
																"Unique_Signature_Hits": 1,
																"Weighted_Support": 8,
																"Unique_Weighted_Support": 3,
																"P_value": "",
																"Significant": ""
															},
															"children": []
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
}