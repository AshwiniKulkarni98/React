import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const abc = (
    <div>
      <h1>hello world</h1>
      <h3>Hello</h3>
    </div>
  );

const RestCards = (props) => {
  const { resName } = props;
  const { image, name, resId } = resName?.info; // optional chaining mechanism with destructuring of the props
  console.log(resName.info.image.urls?.url); // example of optinal chaining if urls is present then fetch the data if not return undefined..useful for managing the nexted data
  let arrayCuisine = [];
  let cuisine = resName.info.cuisine.filter((a) => {
    arrayCuisine.push(a.name);
  });
  return (
    <div className="resName" style={{ backgroundColor: '#ACE2E1' }}>
      <img className="resLogoClass" alt="Biryani" src={image.url}></img>
      <h3> {name}</h3>
      <h4> {arrayCuisine.join(",")}</h4>
      <h5> {props.starRating}</h5>
    </div>
  );
};
const resObj = [
  {
    type: "restaurant",
    info: {
      resId: 50959,
      name: "Tandoor | A Heritage Indian Restaurant & Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/50959/f3f829fa84ab403f04a77048551eff50_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/50959/f3f829fa84ab403f04a77048551eff50_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/50959/562b918f2ad1c0942edb8be230b151c1_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,274",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "1,742",
            reviewTextSmall: "1,742 Reviews",
            subtext: "1,742 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "532",
            reviewTextSmall: "532 Reviews",
            subtext: "532 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,700 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "MG Road, Bangalore",
        address: "28, Centenary Building, MG Road, Bangalore",
        localityUrl: "bangalore/mg-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/kashmiri/",
          name: "Kashmiri",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA3M1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/grilled-chicken/",
          name: "Grilled Chicken",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/bar-food/",
          name: "Bar Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,700 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bangalore/tandoor-a-heritage-indian-restaurant-bar-mg-road-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "2 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3863293","bzone":"0","campaign_id":"12760335","category_id":"1","location_type":"city","location_id":"4","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"50959","isNewAd":"34","ad_position":"10","slider_position":"10","slider_sequence":"10","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":344,\\"boosted_rank\\":10,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0\\",\\"cost_per_unit\\":\\"35.39\\",\\"distance\\":\\"1.678540825843811\\",\\"organic_ctr\\":\\"0.05058365758754864\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"278\\"},\\"search_id\\":\\"b78e5072-d115-4eb1-aa23-a6576adee93b\\",\\"section_name\\":\\"featured\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"50959","element_type":"listing","rank":10,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl:
          "/bangalore/tandoor-a-heritage-indian-restaurant-bar-mg-road-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19049583,
      name: "Street Storyss",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/19049583/ce2f1bec031d3e54da56f8f530cd2102_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/19049583/ce2f1bec031d3e54da56f8f530cd2102_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/19049583/84f74a5142e7562a4fb746a415062bd9_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,722",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.6",
            reviewCount: "2,000",
            reviewTextSmall: "2,000 Reviews",
            subtext: "2,000 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "722",
            reviewTextSmall: "722 Reviews",
            subtext: "722 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,500 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Indiranagar, Bangalore",
        address: "3155, HAL 2nd Stage, Indiranagar, Bangalore",
        localityUrl: "bangalore/indiranagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,500 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/street-storyss-indiranagar-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "4.5 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3511795","bzone":"0","campaign_id":"12405702","category_id":"1","location_type":"city","location_id":"4","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"19049583","isNewAd":"34","ad_position":"11","slider_position":"11","slider_sequence":"11","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":256,\\"boosted_rank\\":11,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.01948051948051948\\",\\"cost_per_unit\\":\\"34.22\\",\\"distance\\":\\"4.187290191650391\\",\\"organic_ctr\\":\\"0.05368575086884946\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"98\\"},\\"search_id\\":\\"b78e5072-d115-4eb1-aa23-a6576adee93b\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19049583","element_type":"listing","rank":11,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bangalore/street-storyss-indiranagar-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20531530,
      name: "Roxie",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/20531530/629962f40194383a29f028fa2ea2dfbd_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/0/20531530/629962f40194383a29f028fa2ea2dfbd_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/20531530/70fd553de42d5a1e9ee1a65d3ea26779_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.5",
        rating_text: "4.5",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "9,244",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.6",
            reviewCount: "9,171",
            reviewTextSmall: "9,171 Reviews",
            subtext: "9,171 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "73",
            reviewTextSmall: "73 Reviews",
            subtext: "73 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,600 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Sarjapur Road, Bangalore",
        address:
          "26, PWD Quarters, Amblipura, Haralur Main Road, Near HP Petrol Station, Sarjapur Road, Bangalore",
        localityUrl: "bangalore/sarjapur-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/european/",
          name: "European",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/american/",
          name: "American",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,600 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/roxie-sarjapur-road-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "10 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20531530","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bangalore/roxie-sarjapur-road-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20540040,
      name: "Magique",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/20540040/04ac68e98bd062fbaf9b66af8d233094_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/0/20540040/04ac68e98bd062fbaf9b66af8d233094_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/20540040/85e03205173e5b6a317c3e53acc991c4_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "3,566",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "3,558",
            reviewTextSmall: "3,558 Reviews",
            subtext: "3,558 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "8",
            reviewTextSmall: "8 Reviews",
            subtext: "8 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,700 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Koramangala 6th Block, Bangalore",
        address:
          "Plot 36, 100 Feet Road, Near SJR Junction, Koramangala 6th Block, Bangalore",
        localityUrl: "bangalore/koramangala-6th-block-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/modern-indian/",
          name: "Modern Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/sushi/",
          name: "Sushi",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,700 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/magique-koramangala-6th-block-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "5.2 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3591970","bzone":"0","campaign_id":"12485945","category_id":"1","location_type":"city","location_id":"4","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20540040","isNewAd":"34","ad_position":"13","slider_position":"13","slider_sequence":"13","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":13,\\"boosted_rank\\":13,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.01870286576168929\\",\\"cost_per_unit\\":\\"29.5\\",\\"distance\\":\\"4.9249749183654785\\",\\"organic_ctr\\":\\"0.04115537007947859\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"403\\"},\\"search_id\\":\\"b78e5072-d115-4eb1-aa23-a6576adee93b\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20540040","element_type":"listing","rank":13,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bangalore/magique-koramangala-6th-block-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20478855,
      name: "Long Boat Brewing Co.",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/20478855/c05533227fb3ec385da1e3e466abc19d_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/5/20478855/c05533227fb3ec385da1e3e466abc19d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20478855/962d28dbceae275f504b2bd6e344f6ea_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "5,636",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "5,163",
            reviewTextSmall: "5,163 Reviews",
            subtext: "5,163 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "473",
            reviewTextSmall: "473 Reviews",
            subtext: "473 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,600 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Marathahalli, Bangalore",
        address: "110, 1st Main, MSR Layout, Marathahalli, Bangalore",
        localityUrl: "bangalore/marathahalli-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/continental/",
          name: "Continental",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,600 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/long-boat-brewing-co-marathahalli-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "11.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20478855","element_type":"listing","rank":14}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bangalore/long-boat-brewing-co-marathahalli-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20494049,
      name: "Maffei Kitchen",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/20494049/82bd8edf1b05adf0cb92dedc7766e8cc_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/20494049/82bd8edf1b05adf0cb92dedc7766e8cc_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/20494049/8c89380e0c83f6f3897e3392d323303b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "868",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.7",
            reviewCount: "519",
            reviewTextSmall: "519 Reviews",
            subtext: "519 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "349",
            reviewTextSmall: "349 Reviews",
            subtext: "349 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,700 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Koramangala 5th Block, Bangalore",
        address:
          "23, Peace Village, 5th Cross, Koramangala 5th Block, Bangalore",
        localityUrl: "bangalore/koramangala-5th-block-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/lebanese/",
          name: "Lebanese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTU2XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/greek/",
          name: "Greek",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQ3XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/moroccan/",
          name: "Moroccan",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,700 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bangalore/maffei-kitchen-1-koramangala-5th-block-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "5.1 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3721394","bzone":"0","campaign_id":"12615517","category_id":"1","location_type":"city","location_id":"4","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20494049","isNewAd":"34","ad_position":"15","slider_position":"15","slider_sequence":"15","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":124,\\"boosted_rank\\":15,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.01534606952709051\\",\\"cost_per_unit\\":\\"34.22\\",\\"distance\\":\\"4.879604339599609\\",\\"organic_ctr\\":\\"0.058449517802952586\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"853\\"},\\"search_id\\":\\"b78e5072-d115-4eb1-aa23-a6576adee93b\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20494049","element_type":"listing","rank":15,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl:
          "/bangalore/maffei-kitchen-1-koramangala-5th-block-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19122613,
      name: "Uru Brewpark",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/19122613/167c2532b0047806fe7049bb2e95f747_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/19122613/167c2532b0047806fe7049bb2e95f747_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/19122613/3b085caa3ce1213e999abbcf19653e9c_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "19.5K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "15.5K",
            reviewTextSmall: "15.5K Reviews",
            subtext: "15.5K Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "4,062",
            reviewTextSmall: "4,062 Reviews",
            subtext: "4,062 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,200 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "JP Nagar, Bangalore",
        address: "4th Phase, Near Maratt Estate, JP Nagar, Bangalore",
        localityUrl: "bangalore/jp-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/lebanese/",
          name: "Lebanese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,200 for two",
      },
    },
    order: [],
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/uru-brewpark-jp-nagar-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "7.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19122613","element_type":"listing","rank":16}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bangalore/uru-brewpark-jp-nagar-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/MaxSafety/DiningBadge/a9e3f60f5ed05ff69a6bfa5eb87b442e1611745067.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures for a safe dining experience",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18727906,
      name: "XOOX Brewmill",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/18727906/7f280675ab76dc8f666a207d64e2e993_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/18727906/7f280675ab76dc8f666a207d64e2e993_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/18727906/268f243ec3fdafee74d30ff8f906d39b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "6,991",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "6,817",
            reviewTextSmall: "6,817 Reviews",
            subtext: "6,817 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "174",
            reviewTextSmall: "174 Reviews",
            subtext: "174 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,500 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Koramangala 5th Block, Bangalore",
        address:
          "8, Industrial Layout, Near HDFC Bank, Koramangala 5th Block, Bangalore",
        localityUrl: "bangalore/koramangala-5th-block-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/american/",
          name: "American",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/modern-indian/",
          name: "Modern Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,500 for two",
      },
    },
    order: [],
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/xoox-brewmill-koramangala-5th-block-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "4.6 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3825730","bzone":"0","campaign_id":"12719962","category_id":"1","location_type":"city","location_id":"4","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"18727906","isNewAd":"34","ad_position":"17","slider_position":"17","slider_sequence":"17","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":61,\\"boosted_rank\\":17,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.01405152224824356\\",\\"cost_per_unit\\":\\"31.86\\",\\"distance\\":\\"4.416749477386475\\",\\"organic_ctr\\":\\"0.025854097355539698\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"840\\"},\\"search_id\\":\\"b78e5072-d115-4eb1-aa23-a6576adee93b\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18727906","element_type":"listing","rank":17,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl:
          "/bangalore/xoox-brewmill-koramangala-5th-block-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/MaxSafety/DiningBadge/a9e3f60f5ed05ff69a6bfa5eb87b442e1611745067.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures for a safe dining experience",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19672427,
      name: "Ironhill Bengaluru",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/19672427/fab0f327a0193957ee122f8c72c4d2f9_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/7/19672427/fab0f327a0193957ee122f8c72c4d2f9_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/19672427/6850f9ded84a8cb0bee4febdcc6cc222_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "28.1K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "27.9K",
            reviewTextSmall: "27.9K Reviews",
            subtext: "27.9K Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "152",
            reviewTextSmall: "152 Reviews",
            subtext: "152 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,000 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Marathahalli, Bangalore",
        address: "90/7 & 90/8, Outer Ring Road, Marathahalli, Bangalore",
        localityUrl: "bangalore/marathahalli-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,000 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/ironhill-bengaluru-marathahalli-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "11.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19672427","element_type":"listing","rank":18}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bangalore/ironhill-bengaluru-marathahalli-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18822687,
      name: "Lono",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/18822687/6506e23ab7bfa5cc6568700b59c4696f_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/7/18822687/6506e23ab7bfa5cc6568700b59c4696f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/18822687/ad5ab7ca117dd8676c23d7a0a6ea478c_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,390",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "3,278",
            reviewTextSmall: "3,278 Reviews",
            subtext: "3,278 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "112",
            reviewTextSmall: "112 Reviews",
            subtext: "112 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,700 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Indiranagar, Bangalore",
        address: "3, 80 Feet Road, Indiranagar, Bangalore",
        localityUrl: "bangalore/indiranagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,700 for two",
      },
    },
    order: [],
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/lono-indiranagar-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "5.7 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"2585079","bzone":"0","campaign_id":"11478164","category_id":"1","location_type":"city","location_id":"4","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"18822687","isNewAd":"34","ad_position":"19","slider_position":"19","slider_sequence":"19","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":216,\\"boosted_rank\\":19,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.016262860935944243\\",\\"cost_per_unit\\":\\"31.86\\",\\"distance\\":\\"5.425999164581299\\",\\"organic_ctr\\":\\"0.05502255085842486\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"611\\"},\\"search_id\\":\\"b78e5072-d115-4eb1-aa23-a6576adee93b\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18822687","element_type":"listing","rank":19,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bangalore/lono-indiranagar-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/MaxSafety/DiningBadge/a9e3f60f5ed05ff69a6bfa5eb87b442e1611745067.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures for a safe dining experience",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20707544,
      name: "Macaw By Stories",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/20707544/edf8142babd81223e5de25ffd877021d_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/20707544/edf8142babd81223e5de25ffd877021d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/20707544/4efe911bc1a90769bf345ed9bc2ee430_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,063",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "2,046",
            reviewTextSmall: "2,046 Reviews",
            subtext: "2,046 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "17",
            reviewTextSmall: "17 Reviews",
            subtext: "17 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,000 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Bommanahalli, Bangalore",
        address:
          "2224, 2225, AECS Layout, Near Singasandra, Hosur Main Road, Bommanahalli, Bangalore",
        localityUrl: "bangalore/bommanahalli-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,000 for two",
      },
    },
    order: [],
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/macaw-by-stories-bommanahalli-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "11.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20707544","element_type":"listing","rank":20}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bangalore/macaw-by-stories-bommanahalli-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20439699,
      name: "Bramble",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/20439699/956ac9bf8427f9cf3fab6cab1d5ed389_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/20439699/956ac9bf8427f9cf3fab6cab1d5ed389_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.5",
        rating_text: "4.5",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "3,114",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "3,110",
            reviewTextSmall: "3,110 Reviews",
            subtext: "3,110 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "4",
            reviewTextSmall: "4 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,800 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Jayanagar, Bangalore",
        address:
          "5th Floor, Le Foliage Building, Marenhalli Road, Jayanagar, Bangalore",
        localityUrl: "bangalore/jayanagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/bar-food/",
          name: "Bar Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,800 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/bramble-jayanagar-bangalore/info",
      clickActionDeeplink: "",
    },
    distance: "6.3 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3543781","bzone":"0","campaign_id":"12437695","category_id":"1","location_type":"city","location_id":"4","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20439699","isNewAd":"34","ad_position":"21","slider_position":"21","slider_sequence":"21","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":30,\\"boosted_rank\\":21,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.01828989483310471\\",\\"cost_per_unit\\":\\"33.04\\",\\"distance\\":\\"6.33669376373291\\",\\"organic_ctr\\":\\"0.04903130532135064\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"391\\"},\\"search_id\\":\\"b78e5072-d115-4eb1-aa23-a6576adee93b\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"b78e5072-d115-4eb1-aa23-a6576adee93b","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20439699","element_type":"listing","rank":21,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bangalore/bramble-jayanagar-bangalore/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
];
const Header = () => {
  return (
    <div className="heading">
      <div className="logos">
        <img
          className="logo"
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
        />
      </div>
      <div className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restarunts">
        {resObj.map((a) => {
          return <RestCards resName={a} key={a.info.resId} />;
        })}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
