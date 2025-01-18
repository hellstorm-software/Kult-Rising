# Kult Rising Changelog
[![Discord](https://img.shields.io/discord/670738185571139590?color=5100ff&labelColor=555555&label=&logo=discord&style=for-the-badge)](https://discord.gg/usKwxca "Discord")
[![Commits](https://img.shields.io/github/commit-activity/m/hellstorm-software/Kult-Rising?color=ff0404&label=commits&style=for-the-badge)](https://github.com/hellstorm-software/Convergence-Changelog/commits "Commit History")
[![Last Commit](https://img.shields.io/github/last-commit/hellstorm-software/Kult-Rising?color=f204ff&label=&style=for-the-badge&display_timestamp=committer)](https://github.com/hellstorm-software/Convergence-Changelog/pulse/monthly "Last activity")

<p style="font-size: smaller;">
    Info: <a href="https://hellstorm-software.github.io/SCP-Convergence/convergence/convergence.html" target="_blank">https://hellstorm-software.github.io/KultRising.html</a><br>
    this game is liscenced under CC BY-SA 3.0<br>
    Sxlaris Wiki: https://www.worldanvil.com/w/sxlaris-sxlar-wasteland<br>
</p>

----------------------------------------------------------
<h2>[JAN]</h2>

17.1.25
- updated [wiki](https://github.com/hellstorm-software/Kult-Rising/blob/main/wikiChangelog.md)
- began building the Kollector's Library
    - built hackerspace lift
    - built hackerspace hallway
    - added folding tables

----------------------------------------------------------

16.1.25
- added slot UI to sym swapper
- condensed and optimized player actor blueprint
- added base functionality to sym swapper

Fixes
- <i>temporarily removed top down view until controller is built</i>
----------------------------------------------------------

15.1.25
- began adding grappling system
    - added grapple function
    - added air boost
    - added ability to grappel to solid objects
    - added model for swinging character
    - added display model for when character not in use
    - added sockets for grapples
    - added retract ability to grappel towards a target
- added skyscrapers to Floor 7
- added switch to gun character from console (this is temporary until the gunman and main controllers are merged)
- set character turn direction on switch
- increased lean amount
- added hand sockets to main character
- added head socket to main character
- added sea mines to Floor 7
- duplicated hub level to keep a smaller one for less optimized machines
- began adding car controller to Floor 7
- began building a second "island" on floor 7
- made momentum carry over when switching from mobility sym to main sym
- began adding sym switching menu
    - added container
    - added toggle on while in inventory
- began adding OP sniper

Fixes
- <i>fixed a bug that caused grapple to not fire</i>
- <i>fixed a bug that caused air boost to override jump while on ground in some instances</i>
- <i>fixed a bug that caused perpetual air boost</i>
- <i>fixed an issue with the console causing gunman to not fire</i>
- <i>fixed an issue where fps console would only work once</i>
- <i>fixed an issue where fps console hitbox was misaligned</i>
- <i>fixed an issue where grappeling towards a target would increase acceleration indefinitely</i>
----------------------------------------------------------

14.1.25
- added more textures to SCP-x3008
    - textured arcade entrance
    - textured theme park entrance
- added sprinting functionality
- added charged jump
- added textures to base in Floor 7
    - added cement floor and ceiling
    - added black walls
- extended length of giant chain
- added action mode toggle
- began building out hotbar switching system
- added xp barrel

Fixes
- <i>fixed an issue that caused Floor 7 to load in the wrong input mode</i>
- <i>fixed an issue that caused a slight delay in jump input</i>
- <i>fixed a bug where jumping while falling caused permanent jump boost</i>
- <i>optimized and cleaned up player controller (server)</i>
- <i>optimized and cleaned up player controller (client)</i>
----------------------------------------------------------

13.1.25
- began adding location title cards
    - added title card widget
    - added title card trigger
    - text now dynamically populates depending on which level you enter
    - added level title
    - added level sub-title
    - added level difficulty
- added spawn point to poolrooms dungeon
- finished basic structure of poolrooms cluster 1
- added water to menu level
- added poolrooms entrance to menu level

Fixes
- <i>fixed a bug that caused mouse inputs to not register outside Floor 7</i>
- <i>added logic to prevent level title from triggering multiple times</i>
- <i>fixed collision issue with poolroom stairs</i>

----------------------------------------------------------

12.1.25
- added character respawn point
- added character respawn logic
- added out of bounds area
- added static controllers for lift recall
- began building poolrooms dungeon
    - built entrance
    - built poolrooms door
    - added skybox
    - added skylight
    - added first slide
- added additional trees

Fixes
- <i>removed redundant flashlights from character model</i>

----------------------------------------------------------

11.1.25
- began implementing city builder
    - added spawn new controller
- began adding phone UI
    - added container
    - added bg image
    - added filler text
- rearranged UI
    - moved navbox to bottom right
    - moved clicker upgrade on top of clicker display
    - removed padding from VEK and clicker displays
- added PFP border
- added PFP BG
- added simple commands console
- linked console to side bar
- added tooltip text to sidebar

----------------------------------------------------------

10.1.25
- changed spice model to proper mesh
- added functionality to help button
- added city building area
- began building city entrance

Fixes<br>
- <i>fixed an issue that caused spice crystals to be too small</i>
- <i>removed extra health bar</i>
- <i>removed extra stamina bar</i>
- <i>removed weapon info bar from base view</i>
- <i>adjusted position of health/mana bars</i>
- <i>fixed a bug that caused perpetual errors in editor while in base view of demo mode</i>
- <i>added range to edge detection</i>

----------------------------------------------------------

9.1.25
- updated navbox text to reflect hive level
- readded functionality to navbox
- began adding floor E to hive level
    - added lift
    - added functionality to lift
- updated sidebar UI
    - added inventory button
    - added mail button
    - added contacts button
    - updated ore stats icon
    - changed market button icon to old stats icon
    - added console button
    - added UI button
    - added phone button
    - added VEK button
    - added skills button
 - implemented full HUD into floor 7 level
 - began building symSwitch functionality
    - added new sym spawn
    - added switch to new sym
    - added move sym to spawn location
    - added switch back and forth between sym 1 & 2
- display arms now reflect which sym is being used
- made it so sidebar turns of while in character mode
- added sidebar to inventory UI
- added switch back to base mode functionality to side bar
- added functionality to navbar button 

Fixes<br>
- <i>fixed a bug that caused interact input to break</i>
- <i>fixed a bug that caused side bar to break</i>
- <i>fixed a bug that caused sym 2 to shoot while controlling sym 1</i>
- <i>fixed a bug that broke mouse inputs when opening inventory while in base view</i>
- <i>fixed a bug that broke mouse inputs when opening inventory while in character view</i>
- <i>fixed an issue with sidebar toggle turning on extra widgets</i>
- <i>changed nav menu to only work while in base mode</i>
- <i>fixed an issue where inventory would stay open when switching back to base mode</i>
- <i>fixed an issue where hive menus wouldn't respond to mouse clicks</i>
----------------------------------------------------------

8.1.25
- moved switch from ship view to player view into sidebar button
- began combining core character controller with fps character controller
    - added shooting functionality
    - added aiming functionality
- added ability to switch from fps view back into ship view
- added switch icon to sidebar

Fixes<br>
- <i>fixed a bug that caused mouse inputs to break when switching back to base controller</i>
- <i>fixed a bug that caused fps character to shoot when not being used</i>
----------------------------------------------------------

7.1.25
- implemented afk value to hive gamemode
- added drones to save system
- added giant chain to hive
    - added bodies to chain
- added ants to menu screen
- adjusted menu screen layout
- added VEK counter to menu screen
- added underwater base to menu screen
- added afk value from hive game to menu screen
- fixed an error that caused VEK counter to increase exponentially
- added ability to switch to FPS character on hive level

Fixes<br>
- <i>fixed a bug that caused an extra drone to spawn on reload</i>
- <i>fixed a bug where if only 2 drones were saved, only 1 would be spawned</i>
- <i>adjusted position of the walker on the menu screen</i>
- <i>adjusted brightness of the lower lights on menu screen</i>
----------------------------------------------------------

6.1.25
- added caustics to hive level
- added side bar UI to hive
- moved bottom UI buttons to side bar
- added background to side bar
- updated clicker UI text to reflect hive level
- implemented recycling clicker
- linked hive collection to recycler
- updated hive gamemode ui
    - updated fuel ui icon
- added functionality to clicker upgrade
- added bonus VEK pickups to hivling food collection
- began adding hive ship
    - added ground base
    - added elevator
- adjusted min/max zoom distance
- updated hive drone models
    - added drone body
    - added legs
    - added head
    - added glowing eyes
    - added drill bit
- updated hive ship UI
    - changed color scheme
- updated drone menu UI
    - changed color scheme

Fixes<br>
- <i>fixed an issue that caused drones to not be selected when clicked</i>
- <i>adjusted color of ppfx in hive</i>
- <i>fixed an issue that caused achievement button to not function</i>
- <i>made side bar icons smaller</i>
- <i>made nav menu smaller</i>
- <i>adjusted nav menu position</i>
- <i>adjusted side bar position</i>
- <i>fixed a bug that caused recycler to be constantly reset</i>
- <i>fixed a bug that caused recycler to continue adding materials when full</i>
- <i>adjusted hive post processing color</i>
- <i>fixed a bug that caused some buttons to turn the wrong color on hover</i>
----------------------------------------------------------

5.1.25
- added grass floor to dreamcore sim
- removed bodycam vingette from immersive levels
- added grass foliage to dreamcore sim
- began building hive minigame
    - added the ability to move camera on right click
    - began adding foliage to terrain
    - added crashed starship
- began adding hivlings to hive minigame
    - added head 1
    - added hands
    - added variance to hivlings on spawn
- began combining clicker game with hive minigame
    - added clicker UI
    - integrated clicker game save state to UI
    - added planets to hive level
- added underwater vfx to hive level
- added post process fx to hive
- carved ocean terrain

Fixes<br>
- <i>fixed an issue that caused a light vingette to appear on immersive levels</i>
- <i>changed camera in hive level to remain in a fixed position for a few seconds before orbiting</i>
- <i>fixed an issue that caused post processing fx to load over UI in hive</i>

----------------------------------------------------------

4.1.25
- finished adding textures to theme park entrance
- finished texturing core area (clusters 1-9)
- created document for SCP-112
- added arcade entrance
- finished marble checker floor to theme park entrance
- began adding large walls
- added gateway entrance to poolrooms
- began adding casino games
    - began adding poker tables
    - began adding roulette tables
    - added blackjack tables to cluster 1
    - added chairs to casino tables

Fixes<br>
- <i>added carpet to fix tiling error on one of the towers in the core clusters</i>
----------------------------------------------------------

3.1.25
- added more textures to SCP-x3008
    - added black carpet
    - added red carpet
    - added wood floor texture
    - finished texturing cluster 1
    - finished texturing cluster 2
    - finished texturing cluster 3
- added oasis cluster 1 near theme park entrance in x3008

Fixes<br>
- <i>changed old wood texture</i>
- <i>changed arcade carpet texture to not be shiny</i>
- <i>changed white marble texture color from off-white to white</i>
----------------------------------------------------------

2.1.25
- created document for SCP-x006-A
- created document for SCP-x3008
- began adding textures to greyboxed elements of SCP-x3008
    - added marble texture to pillars
    - added checkerboard tile texture to floor
    - added wood floors to top of theme park entrance
- began adding lights to theme park entrance

Fixes<br>
- <i>fixed an issue that caused floor 0 windows to load as opaque instead of clear sometimes</i>
----------------------------------------------------------
1.1.25
- added wave 2 to voidwalking
- changed models for wave 2 voidwalkers
- changed models for wave 1 and 2 voidbosses
- added pillar room to poolrooms
- built infinite hallway
- began building looping hallway

Fixes<br>
- <i>fixed an issue that caused wave 2 to continue respawning indefinitely</i>
- <i>fixed an issue that caused wave 2 to stop spawning before the boss</i>
- <i>adjusted position of barricade in demo hub</i>
- <i>fixed a bug that caused entity to spawn before entering hallway in the poolrooms</i>
----------------------------------------------------------

<h2>2024 [DEC]</h2>

31.12.24
- began building gravship hanger in floor 0
- began creating The Fathom (starter gravship)
    - added rear hanger
    - added main corridor
    - added cockpit
    - added door controllers

----------------------------------------------------------

30.12.24
- added sewer level to metropolis
- began building Sewer HQ

Fixes<br>
- <i>adjusted lighting in sewer</i>
----------------------------------------------------------

29.12.24
- added default character model
- added temporary barricade to material extraction door
- replaced default mannequin models on menu screen
- added new logo to menu screen
- rearranged menu screen
- added loading screens to all level changes
- removed crosshair from "immersive" levels
- built room 1 of the poolrooms
- added bodycam component
- added camera overlay for immersive levels

Fixes<br>
- <i>fixed an issue that caused camera to not zoom in/out on scroll in third person view</i>
- <i>fixed an issue that forced game into first person when closing crafting menu</i>
- <i>changed logo color on menu screen</i>
- <i>fixed a bug that caused player model to not load when in inventory</i>
- <i>fixed a bug that caused the player model to turn invisible when closing inventory in third person view</i>
- <i>fixed an issue that caused mouse inputs to be doubled up in bodycam component</i>
- <i>edited pool tile material to be clean tiles</i>
- <i>fixed a lighting issue on menu screen</i>
----------------------------------------------------------

28.12.24
- created void walking level
    - added flat terrain
    - added return to hub door
    - changed skybox to black void
    - added starter chest
    - added first enemy spawn
    - added creature model to void walkers
    - added first level of enemies
    - added level 1 boss
- switched clicker game console to a doorway to create less confusion
    - added label to clicker game door
- updated clicker game ui
    - changed color pallete to match the rest of the game
    - updated button icons
    - updated prestiege button wording
    - added text to asteroid navbar
    - added text to all 5 planet navbars
    - added text to both super planet navbars
    - updated ore info UI
    - changed ore info icons and color
    - <b>finished clicker game</b>


Fixes<br>
- <i>fixed an issue that caused void NPCs to not move</i>
- <i>changed inventory camera to return to previous camera when closing inventory instead of forcing FPS camera</i>
- <i>fixed a bug that caused void walkers to stop spawning too early</i>
- <i>fixed a bug that caused void walkers to spawn indefinitely</i>
- <i>fixed text that said "left click" when it should say "right click"</i>
- <i>fixed an issue that caused "i" to look like "l" in certain fonts</i>
- <i>fixed an issue that caused nav bar to cover achievement and statistics popups</i>
----------------------------------------------------------
26.12.24
- expanded 14th street
- switched out some skyscraper models that were too nice looking for that part of the city
- removed old sector of metropolis
- finished laying out buildings of 14th street
- built south exterior street
- began building east and west exterior streets
- expanded terrain size of metropolis
- doubled the size of the south exterior street

----------------------------------------------------------

25.12.24
- added more to metropolis HQ entrance
- began building quantum dungeon
- added devil entity to quantum dungeon
- updated title screen to new name

Fixes<br>
- <i>fixed an issue that caused glowing outlines of nodes to not be removed when destroyed</i>
----------------------------------------------------------

24.12.24
- changed the name of the game from "SCP: Convergence" to "Kult Rising"
- began building path from core tower to amusement park (SCP-x3008)
- built out entrance to Kult HQ (65%)

Fixes<br>
- <i>fixed an issue that caused entities to attatch to the crafting inventory</i>
- <i>fixed an issue that caused truck doors to move back farther than they move forward</i>
----------------------------------------------------------
23.12.24
- began building Kult HQ in Metropolis
- began building 14th street in Metropolis
- added truck barricade entrances to Kult HQ

Fixes<br>
- <i>fixed an issue that caused trucks in barricade to move back instead of forwards</i>
----------------------------------------------------------

22.12.24
- added "arcade glow" to stone nodes
- changed stone nodes to drop stone on hit as well as when destroyed
- added harvestable tree nodes to SCP-3008
- added arcade glow to tree nodes
- added arcade glow to barrels
- added stone node drop pool
- added tree node drop pool

Fixes<br>
- <i>fixed a bug that caused stone nodes to turn towards the player</i>
- <i>fixed a bug that caused crafting inventory to detatch from player</i>
- <i>fixed a bug that caused nodes to move around in real time</i>

----------------------------------------------------------

21.12.24
- added basic ai function to extraction demo enemies
- buffed enemy move speed when aggro
- added ability to attack to extraction demo zombies
- changed zombie ai to to lose agro on player death
- added on death event to extraction demo
- added player respawn to extraction demo
- added character model to inventory
- moved inventory UI to the right side of the screen
- changed background to inventory/stats ui
- added abstract art splash behind inventory when open
- added door from extraction demo to temp space
- added door from void walking to temp space

Fixes<br>
- <i>fixed a bug that caused the enemy ai to move away from the player when aggrevated instead of towards the player</i>
- <i>fixed an issue that caused dead players to not despawn</i>
- <i>fixed an issue that caused corpses to damage the player</i>
- <i>fixed an issue that caused component barrels to not spawn</i>
- <i>fixed an issue that caused player movement to be slowed sometimes in extraction level</i>
- <i>fixed a bug that caused invisible enemies on death</i>
- <i>fixed a bug that made jumping difficult on the extraction demo</i>

----------------------------------------------------------

20.12.24
- began building out primative crafting inventory
    - added most primative weapons to primative crafting inventory
    - added propane tanks to primative crafting inventory
    - added MREs and takout containers to primative crafting inventory
    - added bones and feathers to primative crafting inventory
    - added generator to primative crafting inventory
    - added coal to primative crafting inventory
- added top floor to floor 0 of the labyrinth
- added stairs going from floor 0 to the top floor
- expanded the top floor by 150%
- added metropolis elevator door to top floor
- began furnishing top floor
    - added foldable tables
    - added flat screens
    - added crt wall
    - added tarps
    - added pillars
- began adding demo level
    - added doorway to void walking
    - added doorway to material extraction
    - added console to clicker game
    - added labeling to doorways
- added generic mountain terrain to extraction demo


Fixes<br>
- <i>fixed a bug that caused the flashlight to not move with the camera on the vertical axis</i>
- <i>removed old weapon flashlight (redundant)</i>
- <i>switched direction of stairs to walk into battlestation more conveniently</i>
- <i>changed flashlight to start off by default</i>

----------------------------------------------------------
19.12.24
- added Tactical Shooter Kit
- added basic gun functionality
- added basic ammo/magazines
- added leaning mechanic
- added step out mechanic
- added neutral human npcs
- added grenade/throwing mechanics
- began building cluster 1 of metropolis (1%)
- added basic functionality of a kill counter
- added footstep sounds
- began adding primative crafting menu
    - added current equipped items to primative crafting inventory
    - added crafting space to primative crafting inventory
    - added lighting to primative crafting inventory
    - added basic materials to primative crafting inventory
    - added gas cans to primative crafting inventory
    - added wine bottles to primative crafting inventory
    - added generator to primative crafting inventory
- blocked player movement while in crafting inventory

Fixes<br>
- <i>fixed a bug that caused the crosshair to not show when hip firing</i>
- <i>fixed a bug that caused the crafting inventory to move around when opened</i>
- <i>fixed a bug that caused players to attack while selecting in the crafting menu</i>
- <i>fixed an issue that caused the crafting inventory to not reattach to the player when closed</i>

----------------------------------------------------------
18.12.24
- added drivable car to SCP-3008 (still need to combine player and car controllers for optimization)
- added auto-load feature
- changed interact key to F
- changed lights/flashlight key to T
- added to cluster 11 (5%)

----------------------------------------------------------
16.12.24
- began adding to cluster 11 (4%)
- added pool tile texture to cluster 11
- added reactive water to cluster 11
- changed project rendering settings to achieve more realistic water
- slightly raised atmospheric brightness in SCP-3008 to account for rendering adjustments

----------------------------------------------------------
15.12.24
- added more to cluster 1 (80%), cluster 10 (7%), cluster 2-4 (5%)

Fixes<br>
- <i>fixed a bug that caused the spells/gunshots to be fired at a slight angle</i>
- <i>fixed a bug that caused dash ability to happen at a slight angle</i>

----------------------------------------------------------
14.12.24
- added icons to main buttons on clicker game
- shifted nav menu down so it wasn't overlapping other ui elements
- added VEK and drone indicator panels
- added harvestable stone nodes to SCP-3008
- changed health bars to only appear after an entity has taken damage
- created outer edges of zone 1 in SCP-3008
- added to cluster 1 (65%)


Fixes<br>
- <i>fixed a bug that caused the camera to not look around when right clicking in clicker game</i>
----------------------------------------------------------
13.12.24
- added respawn function to barrels
- created icons for drones, VEK, and return to station

Fixes<br>
- <i>condensed code for camera switching into a single function</i>
----------------------------------------------------------
12.12.24
- began adding cluster 10 (5%)
- added to cluster 1 (50%)
- added basic materials (wood, stone, scrap, iron, gold, platinum, and black metal)
- added corresponding items, models, and icons for materials
- added loot table to barrel

----------------------------------------------------------

11.12.24
- added furningshings to the starting cluster of SCP-3008 (30%)
- changed the ceiling material and added AC ducts
- added neon signs designating the 4 core locations of SCP-3008
- added placeholder level for burning station
- completed core through line (main menu -> space training zone -> burning station -> driving zone -> scp-3008)
- added component barrels


----------------------------------------------------------

10.12.24
- started adding basic building system
- added radial menu for building
- massively expanded the height between floor 0 and scp-3008
- built SCP-112 platform attatched to floor 0
- added the front car and basic functionality of SCP-112
- added 0 gravity zone to the ceiling area of SCP-3008 for SCP-112 traversal
- added a gravity zone to SCP-3008 so players can stand
- added furnishings to the starting cluster of SCP-3008 (40%)

Fixes<br>
- <i>adjusted height to the floor 0 lift to compensate for the new height</i>
- <i>fixed a bug that caused the camera to clip through the players head when dodging in first person</i>
- <i>fixed an issue that caused a second crosshair to be displayed</i>

----------------------------------------------------------
8.12.24
- added custom base car material
- added glass bridge to liminal pavement level 1
- added liminal pavement car to menu screen
- moved hovercar on menu screen
  
Fixes<br>
- <i>fixed a bug that caused post processing fx to not appear on liminal pavement</i>
- <i>fixed a bug that caused post processing fx to break on terrain</i>

----------------------------------------------------------
7.12.24
- added level 1 to liminal pavement (car sim/exploration minigame)
- built out basic terrain for level 1

----------------------------------------------------------
6.12.24
- added basic car controller
- added camera lock and unlock for car controller
- started adding basic terrain for driving exploration level

Fixes<br>
- <i>fixed a bug that caused cursor to stay on screen when opening inventory on certain maps</i>
- <i>fixed a bug that caused quest check to perpetually throw errors</i>

----------------------------------------------------------
4.12.24
- addeda a separate actor for the ship (clicker game) so that it dynamically follows the camera rather than instantly moving with it
- added hitmarker sound effect on successful attack
- removed the separate fps body and merged the tps/fps systems into a single mesh
- fixed first person camera so animations are visible

Fixes<br>
- <i>fixed a bug that caused hitmarker sound to be played when an attack landed on the player</i>

----------------------------------------------------------
3.12.24
- implemented very basic save/load functionality for overworld
- added player location to save/load function
- added lift to player base to quickly travel betwen the IEC and the base
- expanded core area of SCP-3008

Fixes<br>
- <i>fixed a bug that caused the lift to not travel back up</i>
----------------------------------------------------------
2.12.24
- added nav bar to space gamemodes
- added functionality to travel between planets with nav bar
- updated menu screen skybox
- updated menu screen lighting
- added volumetric lighting to menu
- added default ship to clicker game

Fixes<br>
- <i>fixed a bug that caused post processing fx to not load on some levels</i>
- <i>fixed a bug that caused the skybox to darken during the menu animation</i>
- <i>fixed a bug that caused edge detection to be cast to skybox on the menu level</i>
- <i>fixed a bug that caused post volumetric lighting to not load on menu</i>
----------------------------------------------------------

1.12.24
- added top down camera view to overworld
- added "isometric" view for Mobile Task Force (MTF) minigame
- added base level for MTF

Fixes<br>
- <i>condensed camera switching into its own separate functions for optimization</i>
- <i>created a separate player controller for iso view</i>
----------------------------------------------------------

<h2><b>[NOV]</b></h2>

29.11.24
- added poolroms starting area
- shifted starting area and added the first several rooms
- added reactive water
----------------------------------------------------------

27.11.24
- added zoom in and out to third person mode
----------------------------------------------------------

26.11.24
- added free cam rotation to clicker game
- added camera reset button
- added camera zoom on scroll

Fixes<br>
- <i>fixed a bug that caused camera not to reset zoom if angle hadn't changed</i>
- <i>fixed a bug that caused third person camera to shift to the left when jumping</i>
----------------------------------------------------------

25.11.24
- added planet models to clicker game
- balanced pricing/scaling for clicker game
- changed lobby to floor 1&2 of SCP-3008
- added prestige system to clicker game

Fixes<br>
- <i>fixed a bug that caused the planet textures not to load</i>
- <i>tuned clicker game balancing</i>
----------------------------------------------------------

24.11.24
- elevator random level select
- added skill tree
- added player leveling
- added FPS/TPS camera switch
- added fps hand model

Fixes<br>
- <i>fixed a bug that caused the menu animations to not play</i>
- <i>fixed a bug that caused the FPS camera to not deactivate, causing lighting bugs</i>
----------------------------------------------------------

23.11.24
- added RPG Systems
    - changed player model & controller
    - added inventory
    - added gear slots
    - added gear item template
    - added weapon item template
- added lobby
- added elevator room
    - enter elevator (from lobby)
    - floor controller
    - 
----------------------------------------------------------

20.11.24
- space to earth button
- space save functions
- menu screen

----------------------------------------------------------
 
19.11.24
- added space level
    - clicker game
    - earth to space console
----------------------------------------------------------

18.11.24
- finished V. 1.0.0 of the GDD
---------------------------------------------------------

the official website of sxlar wasteland<br>
© 2021 Sxlar Wasteland. All rights reserved.<br>
https://hellstorm-software.github.io/theGrid/

