# SCP: Convergence Changelog
[![Discord](https://img.shields.io/discord/670738185571139590?color=5100ff&labelColor=555555&label=&logo=discord&style=for-the-badge)](https://discord.gg/usKwxca "Discord")
[![Commits](https://img.shields.io/github/commit-activity/m/hellstorm-software/Convergence-Changelog?color=ff0404&label=commits&style=for-the-badge)](https://github.com/hellstorm-software/Convergence-Changelog/commits "Commit History")
[![Last Commit](https://img.shields.io/github/last-commit/hellstorm-software/Convergence-Changelog?color=f204ff&label=&style=for-the-badge&display_timestamp=committer)](https://github.com/hellstorm-software/Convergence-Changelog/pulse/monthly "Last activity")

<p style="font-size: smaller;">
    Info: <a href="https://hellstorm-software.github.io/SCP-Convergence/convergence/convergence.html" target="_blank">https://hellstorm-software.github.io/convergence.html</a><br>
    this game is liscenced under CC BY-SA 3.0<br>
    SCP Foundation: https://scp-wiki.wikidot.com<br>
    In Progress: <a href="https://trello.com/b/XbZwmsnj/scp-convergence" target="_blank">https://trello.com/b/XbZwmsnj/scp-convergence</a>
</p>

----------------------------------------------------------
<h2><b>[DEC]</b></h2>
12.12.24
- started adding basic building system
- added radial menu for building
- massively expanded the height between floor 0 and scp-3008

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

