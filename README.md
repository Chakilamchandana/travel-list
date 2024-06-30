# Travel Packing Checklist

This project is a React application that helps users create and manage a to-do list for packing items when traveling. Users can select the quantity and item, add it to the packing list, and sort the items based on different criteria. The application also allows users to mark items as packed and see the percentage of items left to pack.

## Features

- **Add Items**: Select the quantity and item, then add it to the packing list.
- **Sort Items**: Sort the items based on input quantity, item description (name), and packed status.
- **Mark as Packed**: Mark items as packed, which calculates the remaining items to pack and displays the percentage left.
- **Completion Status**: When all items are packed, a message indicates that you are all set to travel.

## Installation

1. Clone the repository:  
   git clone https://github.com/Chakilamchandana/travel-list
2. Navigate to the project directory:  
   cd travel-packing-checklist
3. Install dependencies:  
   npm install

## Usage

1. Start the application:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

### App.js

The main component that manages the state and renders other components.

### Form.js

A form component that allows users to input item details (quantity and name) and add them to the list.

### Item.js

A component that represents each item in the list, with a checkbox to mark it as packed.

### PackingList.js

A component that displays the list of items and allows sorting based on different criteria.

### Stats.js

A component that displays the percentage of items left to pack.

### Logo.js

A component that displays the logo of the application
