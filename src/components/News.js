import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Grace Moon, Niha Masih, Adela Suliman, Fenit Nirappil",
      title:
        "What to know about EG.5, the most prevalent covid subvariant in the U.S. - The Washington Post",
      description:
        "Coronavirus subvariant EG.5, nicknamed 'Eris,' is a descendant of Omicron.",
      url: "https://www.washingtonpost.com/health/2023/08/08/eris-covid-variant-eg-5-omicron/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6RDG4JS6XNJYP62ICIWA44NIWA_size-normalized.jpg&w=1440",
      publishedAt: "2023-08-08T16:24:00Z",
      content:
        "The coronavirus has not disappeared. With the advent of successful vaccinations and better social management, however, it has waned.\r\nGlobally, over 1 million new covid-19 cases and more than 3,100 d… [+392 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Alex Harring, Brian Evans",
      title:
        "Dow slides more than 300 points as Moody's bank downgrade adds to August woes: Live updates - CNBC",
      description:
        "Stocks retreated Tuesday as a decline in bank shares dampened investor sentiment.",
      url: "https://www.cnbc.com/2023/08/07/stock-market-today-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107272522-1689618676764-Traders-TF-Photo-AJ-20230717-0129-PRESS-13.jpg?v=1691505358&w=1920&h=1080",
      publishedAt: "2023-08-08T16:14:00Z",
      content:
        "Stocks retreated Tuesday as an August sell-off was reignited by a downgrade of the banking sector by credit rating agency Moody's.\r\nThe Dow Jones Industrial Average was down 265 points, or 0.8%, led … [+1774 chars]",
    },
    {
      source: {
        id: null,
        name: "The Athletic",
      },
      author: "Levi Weaver and Ken Rosenthal",
      title:
        "Orioles’ ‘outrageous’ treatment of broadcaster nothing new + Aaron Boone’s antics - The Athletic",
      description: "Plus: Appreciating the art of the autograph.",
      url: "https://theathletic.com/4758676/2023/08/08/orioles-broadcaster-aaron-boone-ejection-the-windup/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/08/08113318/GettyImages-1559431877-scaled.jpg",
      publishedAt: "2023-08-08T16:10:21Z",
      content:
        "This is a digital version of The Windup newsletter. Sign up here to receive this content directly in your inbox every morning.\r\nGood morning! We have not, at time of writing, been suspended by the Ba… [+8708 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Li Cohen",
      title:
        "Sandra Bullock's longtime partner Bryan Randall dies at 57 after battle with ALS - CBS News",
      description:
        'In a 2021 interview, Bullock described Bryan Randall as a "saint": "I found the love of my life."',
      url: "https://www.cbsnews.com/news/sandra-bullock-partner-bryan-randall-dies-age-57-als/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/08/08/dfc6ae55-d90a-4a9b-a7b5-561e8e8f517d/thumbnail/1200x630/e72c94b1c425e3413ca45f0934800263/gettyimages-968032820.jpg?v=4c3eff96812a3b6c2e014b1daed33369",
      publishedAt: "2023-08-08T15:01:00Z",
      content:
        "Bryan Randall, the longtime partner of award-winning actor Sandra Bullock, has died, family members said. Randall, who was 57, had been privately battling the progressive neurodegenerative disease Am… [+2249 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Marlene Lenthang",
      title:
        "Florida district bars trans teachers from using preferred pronouns and bathrooms to comply with state law - NBC News",
      description:
        "The Orange County Public Schools guidance was issued Monday to follow two Florida laws signed by Gov. Ron DeSantis that took effect in July, impacting gender identity and bathroom usage in state schools.",
      url: "https://www.nbcnews.com/news/us-news/florida-district-bars-trans-teachers-using-preferred-pronouns-bathroom-rcna98734",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230808-bathroom-sign-mb-1443-671c21.jpg",
      publishedAt: "2023-08-08T14:38:42Z",
      content:
        "A major Florida school district, in order to comply with state law, has issued guidance that will bar transgender employees from sharing their preferred pronouns and force trans students and staff to… [+3994 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Naledi Ushe",
      title:
        "Tory Lanez expected to be sentenced for shooting Megan Thee Stallion: Live updates on Day 2 - USA TODAY",
      description:
        "Tory Lanez's sentencing hearing spilled over two days. He is expected to be sentenced Tuesday for shooting Megan Thee Stallion in 2020.",
      url: "https://www.usatoday.com/story/entertainment/celebrities/2023/08/08/tory-lanez-megan-thee-stallion-shooting-sentenced/70548808007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/presto/2023/05/09/USAT/77cb6182-ae48-4457-b854-39d05764d0ff-AP23129775873474.jpg?crop=2999,1687,x1,y36&width=2999&height=1687&format=pjpg&auto=webp",
      publishedAt: "2023-08-08T14:38:10Z",
      content:
        "Rapper Tory Lanez is due in court for a second day, his sentencing hearing for the 2020 shooting of Megan Thee Stallion stretching into Tuesday.\r\nJudge David Herriford had been expected to sentence t… [+7243 chars]",
    },
  ];

  constructor() {
    super();
    console.log("This is the constructor of the News Component");
    this.state = {
      articles: this.articles,
      // loading: false,
    };
  }

  
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d3427fb2c91149fa89bb72d355f915da";
    let parsedData = await fetch(url);
    let jsonData = await parsedData.json();
    console.log(jsonData.articles);
    this.setState({articles: jsonData.articles });
    // console.log("This is componentDidMount");
  }
  render() {
    
    console.log("This is render function");
   let div_Styling = {position: 'relative', left: '40px', marginTop: '15px'}
    return (
      <div className="container mt-9">
        <h2 className="mt-4"  style={div_Styling}>Worldwide News Top-HeadLines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            // console.log(element);
            return (
              <div className="col-md-4 " key={element.url} style={div_Styling}>
                <NewsItem title=  {element.title.slice(0, 44)} description = {element.description?element.description.slice(0, 90): element.description} url = {element.url} imageUrl = {element.urlToImage} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
