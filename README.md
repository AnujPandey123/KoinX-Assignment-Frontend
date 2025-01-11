
# Koin-X

Welcome to the **Koin-X ** project! This responsive and interactive application provides a seamless way to track cryptocurrency prices, trends, and market data. Built with React and powered by the Coingecko API, the application ensures a rich user experience with visually appealing components.

## Deployment Link

Explore the live application at: [Koin-X](https://koinx-assignment-frontend.onrender.com/)

Made By- Anuj Pandey

## Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices, adhering closely to the Figma design.
- **Real-Time Bitcoin Price**: Fetches and displays Bitcoin prices in USD and INR using Coingecko’s `/simple/price` API.
- **Trending Coins Section**: Showcases the top 3 trending cryptocurrencies fetched via the Coingecko `/search/trending` API.
- **Price Change Indicators**: Highlights 24-hour price change percentages for Bitcoin and other cryptocurrencies.
- **Interactive Charts**: Embeds TradingView BTC-USD charts for real-time price visualization.
- **You May Also Like Section**: Displays trending cryptocurrencies with logos, symbols, prices, and sparkline graphs in a horizontally scrollable carousel.
- **Custom Carousel**: Responsive and dynamic carousel powered by `react-multi-carousel` for showcasing coin trends.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate into the project directory**:
   ```bash
   cd <project-directory-name>
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm start
   ```

## API Integration

### **Bitcoin Price**
- **Endpoint**: `/simple/price`
- **Parameters**:
  - `ids`: `bitcoin`
  - `vs_currencies`: `inr,usd`
  - `include_24hr_change`: `true`
- **Sample Response**:
  ```json
  {
    "bitcoin": {
      "inr": 5697177,
      "inr_24h_change": 3.6596920153414336,
      "usd": 68726,
      "usd_24h_change": 3.6767559459431545
    }
  }
  ```

### **Trending Coins**
- **Endpoint**: `/search/trending`
- Fetches the top 3 trending cryptocurrencies.
- **Sample Response**: [API Response Example](https://www.notion.so/Sample-API-Response-search-trending-e85623b447e94deb9da67d3b112b8761?pvs=21)

### **Interactive Charts**
- TradingView BTC-USD charts embedded using the [TradingView Widget](https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/).

## Tasks Implemented

### **Mandatory Tasks**
- Developed all components as per the Figma design.
- Fetched and displayed Bitcoin prices in USD and INR using the `/simple/price` API.
- Embedded TradingView BTC-USD charts for real-time chart updates.
- Displayed top 3 trending coins in the "Trending Coins (24h)" section using `/search/trending` API.
- Created horizontally scrollable carousels in the "You May Also Like" section, showcasing coin logos, symbols, prices, and sparklines.

### **Optional Tasks**
- Enabled dynamic coin display using URL parameters. For example, `/bitcoin` shows Bitcoin data, `/ethereum` shows Ethereum data, and so on.
- Used Coingecko’s `/coins/{id}` API to dynamically fetch symbol information for rendering relevant charts.

## Notes

1. The code follows best practices, clean coding standards, and is structured for scalability.
2. Version control with meaningful commit messages has been maintained for the entire project lifecycle.

## Deployment

The application has been deployed using Vercel for high performance and reliability.

---

### References
- [Coingecko API Documentation](https://www.coingecko.com/api/documentation)
- [TradingView Widget Documentation](https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/)
- [React Multi Carousel Documentation](https://www.npmjs.com/package/react-multi-carousel)

---

