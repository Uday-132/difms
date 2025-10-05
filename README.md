# Digital India Farming and Monitoring System

#Documentation -- [NASA-DIFMS - Team Name No_Thing .docx](https://github.com/user-attachments/files/22711169/NASA-DIFMS.-.Team.Name.No_Thing.docx)


## Project Overview

The Digital India Farming and Monitoring System is a comprehensive agricultural platform designed to connect farmers with buyers while providing essential farming tools and data monitoring capabilities. This system facilitates digital transformation in the agricultural sector by offering a marketplace for farm products, real-time data monitoring, and farmer registration services.

## Project Structure

```
Vit_Hackathon_nothing-main/
├── Backend/
│   ├── BUYER LOGIN.gs
│   ├── BUYER REGISTRATION.gs
│   ├── CROP DATA.gs
│   ├── CROP MONITORING AND SUGGESTIONS.gs
│   ├── Digital market.gs
│   ├── Digital_Market2.gs
│   ├── FARMER LOGIN (PAGE) .gs
│   ├── FARMER REGISTRATION .gs
│   ├── LAND DETAILS .gs
│   ├── MAIN PAGE CODE.gs
│   ├── NASA Real Time Data and Ground Data Observation.gs
│   ├── SATELLITE REAL TIME DATA.gs
│   ├── SOIL pH RANGE AND CROP SELECTION .gs
│   └── SUBMITTING CROP PHOTOS.gs
└── Frontend/
    ├── BUYER LOGIN.html
    ├── BUYER REGISTRATION.html
    ├── CROP DATA.html
    ├── CROP MONITORING AND SUGGESTIONS.html
    ├── Digital market.html
    ├── Digital Market2.html
    ├── FARMER LOGIN (PAGE) .html
    ├── FARMER REGISTRATION .html
    ├── LAND DETAILS .html
    ├── MAIN PAGE CODE.html
    ├── NASA Real Time Data and Ground Data Observation.html
    ├── SATELLITE REAL TIME DATA.html
    ├── SOIL pH RANGE AND CROP SELECTION .html
    ├── SUBMITTING CROP PHOTOS.html
    ├── buy_now.html
    └── styles.css
```

## Key Features

### 1. Farmer Registration and Login
- Farmers can register and create profiles with their land details
- Secure login system with token-based authentication
- Integration with Aadhar and bank account verification

### 2. Buyer Registration and Login
- Buyers can register and create profiles
- Secure login system with token-based authentication

### 3. Product Marketplace
- Digital marketplace for buying and selling agricultural products
- Product listings with images, descriptions, and pricing
- Search and filter capabilities
- Direct communication between buyers and sellers

### 4. Real-time Data Monitoring
- Satellite data integration for crop monitoring
- Ground-level data collection and analysis
- Weather data and crop suggestions
- Soil pH monitoring and crop selection recommendations

### 5. Crop Management
- Crop data collection and analysis
- Monitoring systems for crop health
- Photo submission for crop condition assessment

### 6. Soil Analysis
- Soil pH range monitoring
- Crop selection based on soil conditions
- Recommendations for soil improvement

## User Flow

### For Farmers:
1. Register on the platform using the Farmer Registration page
2. Login to access the Farmer Dashboard
3. View real-time data about their crops and land
4. Submit crop photos for monitoring
5. List products for sale in the marketplace
6. Monitor soil conditions and receive crop suggestions

### For Buyers:
1. Register on the platform using the Buyer Registration page
2. Login to access the Marketplace
3. Browse products from farmers
4. Purchase products directly through the platform
5. Communicate with sellers

## Technical Implementation

### Frontend
- Built with HTML, CSS, and JavaScript
- Responsive design using custom CSS framework
- Consistent styling across all pages with unified stylesheet
- Interactive elements with hover effects and animations

### Backend
- Powered by Google Apps Script
- Data stored in Google Sheets
- RESTful API endpoints for data retrieval
- Server-side processing for form submissions

### Data Storage
- Google Sheets for product listings, user data, and monitoring information
- Cloud storage for images and documents
- Real-time data synchronization

## How to Use

1. **Access the System**: Open `MAIN PAGE CODE.html` to start
2. **Farmer Registration**: Click on "Farmer Registration" and fill in the required details
3. **Farmer Login**: Use your FLI Token Number to login
4. **Buyer Registration**: Click on "Buyer Registration" and fill in the required details
5. **Buyer Login**: Use your BIN Number to login
6. **Browse Marketplace**: View products available for purchase
7. **Purchase Products**: Click "Buy Now" on any product to initiate a purchase
8. **Monitor Crops**: Access real-time data and satellite information
9. **Submit Data**: Use the various forms to submit crop and soil data

## File Descriptions

### Main Pages
- `MAIN PAGE CODE.html` - Entry point with registration and login options
- `FARMER LOGIN (PAGE) .html` - Farmer dashboard with data monitoring
- `BUYER LOGIN.html` - Buyer marketplace interface
- `Digital market.html` and `Digital Market2.html` - Product marketplaces

### Registration Pages
- `FARMER REGISTRATION .html` - Farmer registration form
- `BUYER REGISTRATION.html` - Buyer registration form

### Data Monitoring Pages
- `CROP DATA.html` - Crop data collection and visualization
- `SATELLITE REAL TIME DATA.html` - Satellite data monitoring
- `SOIL pH RANGE AND CROP SELECTION .html` - Soil analysis tools
- `SUBMITTING CROP PHOTOS.html` - Photo submission for crop monitoring

### Specialized Tools
- `LAND DETAILS .html` - Land information and details
- `CROP MONITORING AND SUGGESTIONS.html` - Crop health monitoring
- `NASA Real Time Data and Ground Data Observation.html` - Advanced data analysis

## Styling and Design

The project uses a unified CSS stylesheet (`styles.css`) that provides:
- Consistent color scheme with agricultural themes (greens, browns, earth tones)
- Responsive design that works on mobile, tablet, and desktop
- Modern card-based layout for content organization
- Accessible typography and spacing
- Interactive elements with hover effects

## Development Notes

### Recent Enhancements
- Added "Buy Now" functionality to marketplace pages
- Created purchase flow with product details, customer information, and order confirmation
- Standardized navigation behavior across all pages
- Improved responsive design for better mobile experience
- Enhanced form validation and user feedback

### Best Practices Implemented
- Consistent navigation patterns across all pages
- Proper error handling and user feedback
- Responsive design for all screen sizes
- Accessible color contrast and typography
- Clean, maintainable code structure

## Future Enhancements

1. Integration with additional data sources for more comprehensive monitoring
2. Advanced analytics and reporting features
3. Mobile application development
4. Enhanced security features
5. Multi-language support for wider accessibility
6. Integration with government agricultural databases
7. Advanced recommendation systems based on AI/ML

## Contributing

This project was developed as part of a hackathon initiative. Contributions are welcome in the form of:
- Bug fixes
- Feature enhancements
- UI/UX improvements
- Documentation updates

## License

This project is developed for educational and demonstration purposes as part of a hackathon event.
