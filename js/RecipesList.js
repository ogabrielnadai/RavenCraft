// --- Carpentry --- //
craftsManager.addRecipe(new Recipe("Materiais Carpentry", {}, "Carpentry"));
craftsManager.addRecipe(new Recipe("Rough Plank", { "Small Log": 6 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("Refined Plank", { "Heavy Log": 8 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("Treated Plank", { "Oil": 2, "Heavy Log": 12 }, "Carpentry"));

craftsManager.addRecipe(new Recipe("Bow", {}, "Carpentry"));
craftsManager.addRecipe(new Recipe("T1 Oakwood Bow", { "Coarse Thread": 1, "Rough Plank": 3 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T2 Viper's Bow", { "Coarse Thread": 2, "Rough Plank": 6, "T1 Oakwood Bow": 1 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T3 Black Ashe Bow", { "Sea Cured Leather": 12, "Refined Plank": 10, "Craftman's Thread": 5, "T2 Viper's Bow": 1 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T4 Bullseye Bow", { "Sturdy String": 20, "Treated Plank": 10, "Fine Thread": 5, "T3 Black Ashe Bow": 1 }, "Carpentry"));

craftsManager.addRecipe(new Recipe("Tower Shield", {}, "Carpentry"));
craftsManager.addRecipe(new Recipe("T1 Wooden Bulwark", { "Rough Plank": 2 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T2 Sentinel Shield", { "Rough Plank": 3, "Copper Ingot": 3, "T1 Wooden Bulwark": 1 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T3 Defender Bulwak", { "Sea Cured Leather": 6, "Refined Plank": 6, "Iron Ingot": 8, "T2 Sentinel Shield": 1 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T4 Steelclad Bulwak", { "Rough Steel Plate": 10, "Treated Plank": 12, "Steel Ingot": 10, "T3 Defender Bulwak": 1 }, "Carpentry"));

craftsManager.addRecipe(new Recipe("Staff", {}, "Carpentry"));
craftsManager.addRecipe(new Recipe("T1 Mystic Staff", { "Rough Plank": 4 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T2 Warlock Staff", { "Rough Plank": 8, "T1 Mystic Staff": 1 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T3 Cultist Staff", { "Troll Fang": 12, "Refined Plank": 16, "Iron Ingot": 8, "T2 Warlock Staff": 1 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T4 Celestial Staff", { "Ambersprite Shard": 20, "Treated Plank": 12, "T3 Cultist Staff": 1 }, "Carpentry"));

craftsManager.addRecipe(new Recipe("Bucker Shield", {}, "Carpentry"));
craftsManager.addRecipe(new Recipe("T1 Wooden Buckler", { "Rough Plank": 2 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T2 Sturdy Buckler", { "Rough Plank": 3, "Coarse Leather": 1, "T1 Wooden Buckler": 1 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T3 Marauder's Shield", { "Sea Cured Leather": 6, "Refined Plank": 5, "Craftman's Leather": 2, "T2 Sturdy Buckler": 1 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T4 Rune Shield", { "Rough Steel Plate": 10, "Treated Plank": 12, "Tanned Leather": 10, "T3 Marauder's Shield": 1 }, "Carpentry"));

craftsManager.addRecipe(new Recipe("Sceptre", {}, "Carpentry"));
craftsManager.addRecipe(new Recipe("T1 Knotted Sceptre", { "Rough Plank": 2 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T2 Tribal Sceptre", { "Rough Plank": 4, "T1 Knotted Sceptre": 1 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T3 Serpent Sceptre", { "Troll Fang": 6, "Refined Plank": 10, "Iron Ingot": 8, "T2 Tribal Sceptre": 1 }, "Carpentry"));
craftsManager.addRecipe(new Recipe("T4 Crystal Sceptre", { "Ambersprite Shard": 10, "Treated Plank": 15, "T3 Serpent Sceptre": 1 }, "Carpentry"));

// --- Blacksmithing --- //
craftsManager.addRecipe(new Recipe("Ingots", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("Copper Ingot", { "Copper Ore": 5 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("Iron Ingot", { "Iron Ore": 5 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("Steel Ingot", { "Coal": 2, "Iron Ore": 5 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("T1 Pliant Set", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Pliant Full Set", { "T1 Pliant Helmet": 1, "T1 Pliant Armor": 1, "T1 Pliant Legs": 1, "T1 Pliant Boots": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Pliant Helmet", { "Copper Ingot": 3 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Pliant Armor", { "Copper Ingot": 3 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Pliant Legs", { "Copper Ingot": 3 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Pliant Boots", { "Copper Ingot": 3 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("T2 Crescent Set", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Crescent Full Set", { "T2 Crescent Helmet": 1, "T2 Crescent Armor": 1, "T2 Crescent Legs": 1, "T2 Crescent Boots": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Crescent Helmet", { "Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Helmet": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Crescent Armor", { "Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Armor": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Crescent Legs", { "Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Legs": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Crescent Boots", { "Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Boots": 1 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("T3 Harbinger Set", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Harbinger Full Set", { "T3 Harbinger Helmet": 1, "T3 Harbinger Armor": 1, "T3 Harbinger Legs": 1, "T3 Harbinger Boots": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Harbinger Helmet", { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman's Leather": 3, "T2 Crescent Helmet": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Harbinger Armor", { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman's Leather": 3, "T2 Crescent Armor": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Harbinger Legs", { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman's Leather": 3, "T2 Crescent Legs": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Harbinger Boots", { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman's Leather": 3, "T2 Crescent Boots": 1 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("T4 Enforcer Set", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Enforcer Full Set", { "T4 Enforcer Helmet": 1, "T4 Enforcer Armor": 1, "T4 Enforcer Legs": 1, "T4 Enforcer Boots": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Enforcer Helmet", { "Internal Padding": 5, "Steel Ingot": 18, "Tanned Leather": 3, "T3 Harbinger Helmet": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Enforcer Armor", { "Internal Padding": 5, "Steel Ingot": 18, "Tanned Leather": 3, "T3 Harbinger Armor": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Enforcer Legs", { "Internal Padding": 5, "Steel Ingot": 18, "Tanned Leather": 3, "T3 Harbinger Legs": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Enforcer Boots", { "Internal Padding": 5, "Steel Ingot": 18, "Tanned Leather": 3, "T3 Harbinger Boots": 1 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("Hammer", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Shipbuilding Mallet", { "Copper Ingot": 8 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Crushing Hammer", { "Copper Ingot": 8, "Coarse Leather": 4, "T1 Shipbuilding Mallet": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Punisher's Gavel", { "Sea Cured Leather": 12, "Iron Ingot": 20, "Craftman's Leather": 8, "T2 Crushing Hammer": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Lawgiver's Warhammer", { "Rough Steel Plate": 20, "Steel Ingot": 25, "Tanned Leather": 17, "T3 Punisher's Gavel": 1 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("Greatsword", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Burnished Greatsword", { "Copper Ingot": 8 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Valiant Greatsword", { "Copper Ingot": 6, "Coarse Leather": 6, "T1 Burnished Greatsword": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Heroic Greatsword", { "Troll Fang": 12, "Iron Ingot": 10, "Craftman's Leather": 10, "T2 Valiant Greatsword": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Bonebiter Greatsword", { "Thin Blade": 20, "Steel Ingot": 12, "Tanned Leather": 20, "T3 Heroic Greatsword": 1 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("Light Blade", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Skirmisher Blade", { "Copper Ingot": 8 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Swashbuckler Blade", { "Copper Ingot": 6, "Coarse Leather": 6, "T1 Skirmisher Blade": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Serpentine Blade", { "Troll Fang": 12, "Iron Ingot": 10, "Craftman's Leather": 10, "T2 Swashbuckler Blade": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Duelist's Companion", { "Cunning Handle": 10, "Steel Ingot": 12, "Tanned Leather": 20, "T3 Serpentine Blade": 1 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("Sword", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Rough Sword", { "Copper Ingot": 4 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Warden's Sword", { "Copper Ingot": 4, "Coarse Leather": 2, "T1 Rough Sword": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Lawbreaker's Sword", { "Troll Fang": 6, "Iron Ingot": 5, "Craftman's Leather": 5, "T2 Warden's Sword": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Guardian's Longsword", { "Thin Blade": 10, "Steel Ingot": 7, "Tanned Leather": 10, "T3 Lawbreaker's Sword": 1 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("Club", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Solid Mace", { "Copper Ingot": 4 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Studded Flail", { "Copper Ingot": 3, "Coarse Leather": 3, "T1 Solid Mace": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Shieldbreaker's Flail", { "Sea Cured Leather": 6, "Iron Ingot": 10, "Craftman's Leather": 4, "T2 Studded Flail": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Ravenguard Morningstar", { "Rough Steel Plate": 10, "Steel Ingot": 16, "Tanned Leather": 8, "T3 Shieldbreaker's Flail": 1 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("Dagger", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Serrated Dagger", { "Copper Ingot": 4 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Noble Dagger", { "Copper Ingot": 4, "Coarse Leather": 2, "T1 Serrated Dagger": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Ice Dagger", { "Troll Fang": 6, "Iron Ingot": 5, "Craftman's Leather": 5, "T2 Noble Dagger": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Heartstopper Dagger", { "Cunning Handle": 10, "Steel Ingot": 7, "Tanned Leather": 10, "T3 Ice Dagger": 1 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("Axe", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Wicked Axe", { "Copper Ingot": 4 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Marauder's Axe", { "Copper Ingot": 3, "Coarse Leather": 3, "T1 Wicked Axe": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Dread Axe", { "Sea Cured Leather": 12, "Iron Ingot": 10, "Craftman's Leather": 4, "T2 Marauder's Axe": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Stormcarver Axe", { "Metallic Core": 10, "Steel Ingot": 16, "Tanned Leather": 8, "T3 Dread Axe": 1 }, "Blacksmithing"));

craftsManager.addRecipe(new Recipe("Greataxe", {}, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T1 Rough Greataxe", { "Copper Ingot": 8 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T2 Warrior's Greataxe", { "Copper Ingot": 8, "Coarse Leather": 4, "T1 Rough Greataxe": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T3 Savage Battle Axe", { "Sea Cured Leather": 12, "Iron Ingot": 20, "Craftman's Leather": 8, "T2 Warrior's Greataxe": 1 }, "Blacksmithing"));
craftsManager.addRecipe(new Recipe("T4 Hangman's Greataxe", { "Metallic Core": 20, "Steel Ingot": 25, "Tanned Leather": 8, "T3 Savage Battle Axe": 1 }, "Blacksmithing"));

// --- Weaving --- //
craftsManager.addRecipe(new Recipe("Cloth", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("Simple Cloth", { "Wool": 6 }, "Weaving"));
craftsManager.addRecipe(new Recipe("Craftman's Cloth", { "Wool": 4 }, "Weaving"));
craftsManager.addRecipe(new Recipe("Silk", { "Wool": 6 }, "Weaving"));

craftsManager.addRecipe(new Recipe("Leather", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("Coarse Leather", { "Hide": 2 }, "Weaving"));
craftsManager.addRecipe(new Recipe("Craftman's Leather", { "Hide": 4 }, "Weaving"));
craftsManager.addRecipe(new Recipe("Tanned Leather", { "Hide": 6 }, "Weaving"));

craftsManager.addRecipe(new Recipe("Threads", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("Coarse Thread", { "Cotton": 3 }, "Weaving"));
craftsManager.addRecipe(new Recipe("Craftman's Thread", { "Cotton": 6 }, "Weaving"));
craftsManager.addRecipe(new Recipe("Fine Thread", { "Cotton": 9 }, "Weaving"));

craftsManager.addRecipe(new Recipe("Weavin Craft T1", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Loom Full Set", { "T1 Loom Apprentice Helmet": 1, "T1 Loom Apprentice Armor": 1, "T1 Loom Apprentice Legs": 1, "T1 Loom Apprentice Boots": 1, "T1 Loom Apprentice Gloves": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Loom Apprentice Helmet", { "Craftman's Thread": 5, "Craftman's Cloth": 3 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Loom Apprentice Armor", { "Craftman's Thread": 3, "Craftman's Cloth": 5 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Loom Apprentice Legs", { "Craftman's Thread": 5, "Craftman's Cloth": 3 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Loom Apprentice Boots", { "Craftman's Thread": 3, "Craftman's Cloth": 5 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Loom Apprentice Gloves", { "Craftman's Thread": 8, "Craftman's Cloth": 8 }, "Weaving"));

craftsManager.addRecipe(new Recipe("Weavin Craft T2", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Threadspinner Full Set", { "T2 Threadspinner Helmet": 1, "T2 Threadspinner Armor": 1, "T2 Threadspinner Legs": 1, "T2 Threadspinner Boots": 1, "T2 Threadspinner Gloves": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Threadspinner Helmet", { "Silk": 8, "Fine Thread": 3, "T1 Loom Apprentice Helmet": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Threadspinner Armor", { "Silk": 8, "Fine Thread": 3, "T1 Loom Apprentice Armor": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Threadspinner Legs", { "Silk": 3, "Fine Thread": 8, "T1 Loom Apprentice Legs": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Threadspinner Boots", { "Silk": 3, "Fine Thread": 8, "T1 Loom Apprentice Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Threadspinner Gloves", { "Silk": 12, "Fine Thread": 9, "T1 Loom Apprentice Gloves": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("Blacksmithing Craft T1", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Apprentice Full Set", { "T1 Apprentice Anvil Helmet": 1, "T1 Apprentice Anvil Armor": 1, "T1 Apprentice Anvil Legs": 1, "T1 Apprentice Anvil Boots": 1, "T1 Apprentice Anvil Bracers": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Apprentice Anvil Helmet", { "Craftman's Thread": 3, "Craftman's Leather": 5 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Apprentice Anvil Armor", { "Craftman's Thread": 3, "Craftman's Leather": 5 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Apprentice Anvil Legs", { "Craftman's Thread": 5, "Craftman's Leather": 3 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Apprentice Anvil Boots", { "Craftman's Thread": 5, "Craftman's Leather": 3 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Apprentice Anvil Bracers", { "Craftman's Thread": 8, "Craftman's Leather": 8 }, "Weaving"));

craftsManager.addRecipe(new Recipe("Blacksmithing Craft T2", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Silversmith Full Set", { "T2 Silversmith Helmet": 1, "T2 Silversmith Armor": 1, "T2 Silversmith Legs": 1, "T2 Silversmith Boots": 1, "T2 Silversmith Bracers": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Silversmith Helmet", { "Tanned Leather": 8, "Fine Thread": 3, "T1 Apprentice Anvil Helmet": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Silversmith Armor", { "Tanned Leather": 8, "Fine Thread": 3, "T1 Apprentice Anvil Armor": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Silversmith Legs", { "Tanned Leather": 3, "Fine Thread": 8, "T1 Apprentice Anvil Legs": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Silversmith Boots", { "Tanned Leather": 3, "Fine Thread": 8, "T1 Apprentice Anvil Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Silversmith Bracers", { "Tanned Leather": 12, "Fine Thread": 9, "T1 Apprentice Anvil Bracers": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("Cooking Craft T1", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Fry Full Set", { "T1 Fry Cook Helmet": 1, "T1 Fry Cook Armor": 1, "T1 Fry Cook Legs": 1, "T1 Fry Cook Boots": 1, "T1 Fry Cook Bracers": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Fry Cook Helmet", { "Craftman's Thread": 3, "Craftman's Cloth": 5 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Fry Cook Armor", { "Craftman's Thread": 3, "Craftman's Cloth": 5 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Fry Cook Legs", { "Craftman's Thread": 5, "Craftman's Cloth": 3 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Fry Cook Boots", { "Craftman's Thread": 5, "Craftman's Cloth": 3 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Fry Cook Bracers", { "Craftman's Thread": 8, "Craftman's Cloth": 8 }, "Weaving"));

craftsManager.addRecipe(new Recipe("Cooking Craft T2", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Sous Full Set", { "T2 Sous Chef Helmet": 1, "T2 Sous Chef Armor": 1, "T2 Sous Chef Legs": 1, "T2 Sous Chef Boots": 1, "T2 Sous Chef Bracers": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Sous Chef Helmet", { "Silk": 8, "Fine Thread": 3, "T1 Fry Cook Helmet": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Sous Chef Armor", { "Silk": 8, "Fine Thread": 3, "T1 Fry Cook Armor": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Sous Chef Legs", { "Silk": 3, "Fine Thread": 8, "T1 Fry Cook Legs": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Sous Chef Boots", { "Silk": 3, "Fine Thread": 8, "T1 Fry Cook Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Sous Chef Bracers", { "Silk": 12, "Fine Thread": 9, "T1 Fry Cook Bracers": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("T1 Carpentry Craft", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Workshop Full Set", { "T1 Workshop Assistant Helmet": 1, "T1 Workshop Assistant Armor": 1, "T1 Workshop Assistant Legs": 1, "T1 Workshop Assistant Boots": 1, "T1 Workshop Assistant Gloves": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Workshop Assistant Helmet", { "Craftman's Thread": 3, "Craftman's Leather": 5 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Workshop Assistant Armor", { "Craftman's Thread": 3, "Craftman's Leather": 5 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Workshop Assistant Legs", { "Craftman's Thread": 5, "Craftman's Leather": 3 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Workshop Assistant Boots", { "Craftman's Thread": 5, "Craftman's Leather": 3 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Workshop Assistant Gloves", { "Craftman's Thread": 8, "Craftman's Leather": 8 }, "Weaving"));

craftsManager.addRecipe(new Recipe("T2 Carpentry Craft", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Woodworker Full Set", { "T2 Woodworker Helmet": 1, "T2 Woodworker Armor": 1, "T2 Woodworker Legs": 1, "T2 Woodworker Boots": 1, "T2 Woodworker Gloves": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Woodworker Helmet", { "Tanned Leather": 8, "Fine Thread": 3, "T1 Workshop Assistant Helmet": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Woodworker Armor", { "Tanned Leather": 8, "Fine Thread": 3, "T1 Workshop Assistant Armor": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Woodworker Legs", { "Tanned Leather": 3, "Fine Thread": 8, "T1 Workshop Assistant Legs": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Woodworker Boots", { "Tanned Leather": 3, "Fine Thread": 8, "T1 Workshop Assistant Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Woodworker Gloves", { "Tanned Leather": 12, "Fine Thread": 9, "T1 Workshop Assistant Gloves": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("T1 Cloth", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Shadecloth Full Set", { "T1 Shadecloth Helmet": 1, "T1 Shadecloth Armor": 1, "T1 Shadecloth Legs": 1, "T1 Shadecloth Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Shadecloth Helmet", { "Simple Cloth": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Shadecloth Armor", { "Simple Cloth": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Shadecloth Legs", { "Simple Cloth": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Shadecloth Boots", { "Simple Cloth": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("T2 Cloth", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Viper's Full Set", { "T2 Viper's Helmet": 1, "T2 Viper's Armor": 1, "T2 Viper's Legs": 1, "T2 Viper's Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Viper's Helmet", { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Helmet": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Viper's Armor", { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Armor": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Viper's Legs", { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Legs": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Viper's Boots", { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Boots": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("T3 Cloth", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T3 Profane Full Set", { "T3 Profane Helmet": 1, "T3 Profane Armor": 1, "T3 Profane Legs": 1, "T3 Profane Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T3 Profane Helmet", { "Shell Fragment": 3, "Craftman's Cloth": 3, "Craftman's Thread": 2, "T2 Viper's Helmet": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T3 Profane Armor", { "Shell Fragment": 3, "Craftman's Cloth": 3, "Craftman's Thread": 2, "T2 Viper's Armor": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T3 Profane Legs", { "Shell Fragment": 3, "Craftman's Cloth": 2, "Craftman's Thread": 3, "T2 Viper's Legs": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T3 Profane Boots", { "Shell Fragment": 3, "Craftman's Cloth": 2, "Craftman's Thread": 3, "T2 Viper's Boots": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("T4 Cloth", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T4 Celestial Full Set", { "T4 Celestial Helmet": 1, "T4 Celestial Armor": 1, "T4 Celestial Legs": 1, "T4 Celestial Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T4 Celestial Helmet", { "Phantasmagorical Cloth": 5, "Silk": 3, "Fine Thread": 3, "T3 Profane Helmet": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T4 Celestial Armor", { "Phantasmagorical Cloth": 5, "Silk": 3, "Fine Thread": 3, "T3 Profane Armor": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T4 Celestial Legs", { "Phantasmagorical Cloth": 5, "Silk": 3, "Fine Thread": 3, "T3 Profane Legs": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T4 Celestial Boots", { "Phantasmagorical Cloth": 5, "Silk": 3, "Fine Thread": 3, "T3 Profane Boots": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("T1 Leather", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Hide Full Set", { "T1 Hide Helmet": 1, "T1 Hide Armor": 1, "T1 Hide Legs": 1, "T1 Hide Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Hide Helmet", { "Coarse Leather": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Hide Armor", { "Coarse Leather": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Hide Legs", { "Coarse Leather": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T1 Hide Boots", { "Coarse Leather": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("T2 Leather", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Nomad Full Set", { "T2 Nomad Helmet": 1, "T2 Nomad Armor": 1, "T2 Nomad Legs": 1, "T2 Nomad Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Nomad Helmet", { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Helmet": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Nomad Armor", { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Armor": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Nomad Legs", { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Legs": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T2 Nomad Boots", { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Boots": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("T3 Leather", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T3 Bruiser Full Set", { "T3 Bruiser Helmet": 1, "T3 Bruiser Armor": 1, "T3 Bruiser Legs": 1, "T3 Bruiser Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T3 Bruiser Helmet", { "Shell Fragment": 3, "Craftman's Leather": 3, "Craftman's Thread": 2, "T2 Nomad Helmet": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T3 Bruiser Armor", { "Shell Fragment": 3, "Craftman's Leather": 3, "Craftman's Thread": 2, "T2 Nomad Armor": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T3 Bruiser Legs", { "Shell Fragment": 3, "Craftman's Leather": 2, "Craftman's Thread": 3, "T2 Nomad Legs": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T3 Bruiser Boots", { "Shell Fragment": 3, "Craftman's Leather": 2, "Craftman's Thread": 3, "T2 Nomad Boots": 1 }, "Weaving"));

craftsManager.addRecipe(new Recipe("T4 Leather", {}, "Weaving"));
craftsManager.addRecipe(new Recipe("T4 Outlaw Full Set", { "T4 Outlaw Helmet": 1, "T4 Outlaw Armor": 1, "T4 Outlaw Legs": 1, "T4 Outlaw Boots": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T4 Outlaw Helmet", { "Kaiman Scale": 5, "Tanned Leather": 3, "Fine Thread": 3, "T3 Bruiser Helmet": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T4 Outlaw Armor", { "Kaiman Scale": 5, "Tanned Leather": 3, "Fine Thread": 3, "T3 Bruiser Armor": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T4 Outlaw Legs", { "Kaiman Scale": 5, "Tanned Leather": 3, "Fine Thread": 3, "T3 Bruiser Legs": 1 }, "Weaving"));
craftsManager.addRecipe(new Recipe("T4 Outlaw Boots", { "Kaiman Scale": 5, "Tanned Leather": 3, "Fine Thread": 3, "T3 Bruiser Boots": 1 }, "Weaving"));

// --- Cooking --- //
craftsManager.addRecipe(new Recipe("Baked Goods", {}, "Cooking"));
craftsManager.addRecipe(new Recipe("Baked Potatoes", { "Potato": 4 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Corn On a Cob", { "Corn": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Potato Bread", { "Corn": 1, "Potato": 3 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Sajecho Hardtack", { "Orange Scales": 2, "Ground Flour": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Rohna Crackers", { "Ground Flour": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Glademire Crackers", { "Ground Flour": 6 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Bun", { "Basic Seasoning": 1, "Ground Flour": 5 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Loaf Bread", { "Basic Seasoning": 1, "Ground Flour": 8 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Cookies", { "Basic Seasoning": 1, "Ground Flour": 8 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Scone", { "Ground Flour": 5, "Milk": 1, "Basic Seasoning": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Combread", { "Ground Flour": 5, "Corn": 1, "Basic Seasoning": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Deluxe Cookies", { "Ground Flour": 9, "Butter": 1, "Basic Seasoning": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Muffin", { "Ground Flour": 4, "Milk": 1, "Honey": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Bohel", { "Ground Flour": 4, "Egg": 2, "Gourmet Seasoning": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Cake", { "Ground Flour": 6, "Milk": 1, "Egg": 2 }, "Cooking"));

craftsManager.addRecipe(new Recipe("Drinks", {}, "Cooking"));
craftsManager.addRecipe(new Recipe("Vodka", { "Potato": 5 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Beer", { "Wheat": 5 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Landing Brandy", { "Apple": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Apple Cider", { "Apple": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Wine", { "Brewer Yeast": 1, "Grape": 4 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Whiskey", { "Brewer Yeast": 1, "Corn": 4 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Orange Liqueur", { "Brewer Yeast": 1, "Orange": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Rum", { "Brewer Yeast": 1, "Apple": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Blueberry Wine", { "Grape": 7, "Blueberry": 10, "Brewer Yeast": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Boozemelon", { "Watermelon": 1, "Pumpkin": 1, "Brewer Yeast": 2 }, "Cooking"));

craftsManager.addRecipe(new Recipe("Meals", {}, "Cooking"));
craftsManager.addRecipe(new Recipe("Corn Chowder", { "Corn": 3 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Corn Salad", { "Corn": 3 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Scrambled Eggs", { "Egg": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Apple Puree", { "Apple": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Mashed Potatoes", { "Potato": 8 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Carrot Soup", { "Potato": 3, "Carrot": 5 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Lyderian Fries", { "Oil": 1, "Potato": 12 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Omelet", { "Milk": 2, "Egg": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Silky Scrambled Eggs", { "Butter": 1, "Egg": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Steamed Carrots", { "Basic Seasoning": 1, "Carrot": 4 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Fruit Pancakes", { "Grape": 5, "Milk": 2, "Egg": 4, "Ground Flour": 6 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Smoked Garlic Sausage", { "Garlic": 2, "Shank": 2, "Basic Seasoning": 1, "Potato": 4 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Charred Meat Kebab", { "Beef": 2, "Carrot": 2, "Cabbage": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Roasted Chiken And Veggies", { "Chicken": 2, "Carrot": 6, "Bean": 3 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Ravendawnian Porridge", { "Wheat": 5, "Apple": 3, "Milk": 3 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Rum Downslider", { "Fish Roe": 5, "Cabbage": 3, "Seafood Seadoning": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Shaked Fruitmilk", { "Milk": 2, "Strawberry": 2, "Blueberry": 10 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Settler's Stew", { "Potato": 25, "Brocolli": 8, "Basic Seasoning": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Dwarven Purple Shank", { "Shank": 2, "Grape": 4, "Orange": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Filet Lucien", { "Brocolli": 1, "Beef": 1, "Ground Flour": 5, "Egg": 4 }, "Cooking"));

craftsManager.addRecipe(new Recipe("Ingredient", {}, "Cooking"));
craftsManager.addRecipe(new Recipe("Oil", { "Corn": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Basic Seasoning", { "Salt": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Seafood Seasoning", { "Orange Scales": 5, "Salt": 1 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Ground Flour", { "Wheat": 10 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Ground Flour", { "Corn": 10 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Butter", { "Milk": 2 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Brewer Yeast", { "Wheat": 3, "Orange Scales": 5 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Gourmet Seasoning", { "Onion": 1, "Salt": 3 }, "Cooking"));
craftsManager.addRecipe(new Recipe("Rich Flour", { "Three-Leaf Clover": 1, "Ground Flour": 20 }, "Cooking"));