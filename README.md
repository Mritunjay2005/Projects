# **Shorting Rate Dashboard**

## **Project Description**
This project is a **real-time Shorting Rate Dashboard** built using **Node.js**, **Socket.io**, and **D3.js/Chart.js**. The application displays live shorting rate data with dynamic graphs and metrics, providing users with real-time insights into the data without needing to refresh the page. This dashboard is designed to visualize financial shorting metrics in an interactive and user-friendly way.

### **Key Features:**
- **Real-Time Data Updates**: Displays data in real-time as it's received from the server without requiring a page refresh.
- **Data Visualization**: Interactive charts are dynamically updated to show metrics such as shorting rates, maximum, minimum, and average rates.
- **User-Friendly Interface**: Simple and easy-to-understand dashboard that presents key metrics clearly.

## **Skills Used**
- **HTML/CSS**: For the structure and styling of the webpage.
- **JavaScript**: For implementing dynamic interactions and data handling.
- **Node.js**: Backend server to handle socket connections and serve data.
- **Socket.io**: For establishing real-time communication between the server and client.
- **Chart.js/D3.js**: For visualizing the real-time data on interactive charts.
- **Express.js**: For serving static files and setting up the server.

## **Features Implemented**
- **Real-Time Data Updates**: The dashboard receives and displays new shorting rate data every 2 seconds via socket connections.
- **Dynamic Charts**: The dashboard visualizes data using interactive charts to track the shorting rates and other key metrics.
- **Metrics Display**: The application displays:
  - Current Shorting Rate
  - Max Shorting Rate
  - Min Shorting Rate
  - Average Shorting Rate
- **Error Handling**: If the connection is lost, a user-friendly message is displayed notifying the user of the disconnection.

## **How to Run the Application**

### **Step-by-Step Guide**:
```markdown

#### 1. **Clone the Repository**
First, clone this repository to your local machine:
```bash
#
git clone https://github.com/your-username/shorting-rate-dashboard.git
cd shorting-rate-dashboard #

#### 2. **Install Dependencies**
Navigate to the project directory and install the required dependencies:

```bash
npm install express socket.io

#### 3. **Start the Server**
Run the server using Node.js:

```bash
node server.js

#### 4. **Open in Browser**
Once the server is running, open your browser and navigate to:

http://localhost:3000

#### 5. **Interact with the Dashboard**
You should now see the Shorting Rate Dashboard in your browser. The data will be updated in real-time every 2 seconds, and the dashboard will display the current shorting rate, max rate, min rate, and average rate.

####6. **Stop the Server**
To stop the server, go to the terminal and press Ctrl+C.





******************************************************************************************************


**Folder Structure**
The project folder structure should look like this:

shorting-rate-dashboard/
├── public/
│   ├── index.html       # The main HTML file for the dashboard
│   ├── app.js           # JavaScript file that handles socket communication and DOM manipulation
│   └── style.css        # CSS file for styling the dashboard
└── server.js            # The Node.js server file to handle the backend and socket communication
