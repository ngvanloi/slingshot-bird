# Project: Slingshot Bird Game

## Description

This is a physics-based interactive game built using the Matter.js library and p5.js framework. The goal of the game is to launch a bird using a slingshot to knock down stacked boxes. The game includes features such as mouse interaction, physics-based collisions, and custom visuals.

---

## Features

- **Physics Simulation**: The game uses Matter.js for realistic physics including gravity, collisions, and constraints.
- **Custom Graphics**: Includes custom images for the background, bird, and boxes for enhanced visuals.
- **Dynamic Gameplay**: Players can reset the bird and try again by pressing the `SPACE` key.
- **Mouse Interaction**: Drag the bird using the mouse for precise aiming.

---

## Installation

1. **Clone or Download the Repository**

   ```bash
   git clone https://github.com/ngvanloi/slingshot-bird.git
   cd slingshot-bird
   ```

2. **Install Dependencies**  
   Ensure you have p5.js and Matter.js libraries in your project. If not, you can include them via a CDN in your `index.html`.

3. **Run the Project**  
   Open `index.html` using a live server (e.g., in Visual Studio Code).

---

## How to Play

1. **Start the Game**  
   Launch the `index.html` file in a browser.

2. **Aim and Shoot**

   - Drag the bird using the mouse to adjust the angle and force.
   - Release the mouse to launch the bird.

3. **Reset the Bird**  
   Press the `SPACE` key to reset the bird and try again.

4. **Objective**  
   Knock down the stacked boxes with as few launches as possible.

---

## Game Components

1. **Ground**  
   A static platform at the bottom of the screen.

2. **Boxes**  
   Stacked objects that the bird needs to knock down.

3. **Bird**  
   The projectile launched using the slingshot.

4. **Slingshot**  
   A constraint object used to drag and launch the bird.

5. **Mouse Interaction**  
   The mouse constraint allows dragging and launching the bird with precision.

---

## Code Overview

### Core Components

- **Physics Engine**:  
  Created using `Matter.Engine`.

  ```javascript
  engine = Engine.create();
  world = engine.world;
  ```

- **Custom Classes**:

  - `Ground`: Represents the ground.
  - `Box`: Represents individual boxes.
  - `Bird`: Represents the projectile.
  - `SlingShot`: Handles the slingshot mechanism.

- **Interaction Handling**:
  - Mouse drag and release are used for aiming and launching.
  - The `SPACE` key resets the game.

---

## Customization

You can modify the following for a personalized experience:

- **Box Layout**: Change the number of rows and columns in the `setup()` function:

  ```javascript
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 1 + row; col++) {
      let x = 1000 + col * 100;
      let y = 550 - row * 100;
      boxes.push(new Box(x, y, 100, 100));
    }
  }
  ```

- **Visuals**: Replace the image paths in the `preload()` function with your custom assets.

---

## Future Improvements

- Add scoring mechanics to track player performance.
- Include sound effects for launches and collisions.
- Add multiple levels with varying difficulties.

---

## Credits

- **Libraries Used**:

  - [Matter.js](https://brm.io/matter-js/)
  - [p5.js](https://p5js.org/)

- **Custom Images**:
  - Background, bird, and box visuals were created for this project.
