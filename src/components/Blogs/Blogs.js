import BlogHeader from "./BlogHeader";

const blogs = [
    {
        "id": 3,
        "title": "Making wearable medical devices more patient-friendly with Professor Esther Rodriguez-Villegas from Acurable",
        "image": "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=430&h=230&crop=1",
        "category": "Health",
        "author": "Darrell Etherington",
        "authorPic": "author1.jpg",
        "published_date": "October 4, 2023",
        "reading_time": "8 minutes",
        "content": "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable...",
        "tags": ["Biotech", "Health"]
    },
    {
        "id": 4,
        "title": "Rainforest raises $8.5M to help software companies embed financial services, payments",
        "image": "https://techcrunch.com/wp-content/uploads/2015/02/shutterstock_128451140.jpg?w=430&h=230&crop=1",
        "category": "Fintech",
        "author": "Mary Ann Azevedo",
        "authorPic": "author1.jpg",
        "published_date": "2023-10-01",
        "reading_time": "5 minutes",
        "content": "In November 2019, Andreessen Horowitz General Partner Angela Strange famously declared that, “Every company will be a fintech company.” Specifically, Strange projected that — in the not-too-d...",
        "tags": ["Fintech", "Writing"]
    },
    {
        "id": 5,
        "title": "Pow.bio says biomanufacturing is broken and its continuous fermentation tech will fix it",
        "image": "https://techcrunch.com/wp-content/uploads/2023/10/Pow-Lab2.jpg?w=430&h=230&crop=1",
        "category": "Startups",
        "author": "Christine Hall",
        "authorPic": "author1.jpg",
        "published_date": "2023-10-01",
        "reading_time": "5 minutes",
        "content": "Pow.bio intends to bring down the costs associated with biomanufacturing by reimagining of fermentation facility operations.",
        "tags": ["Startups", "Writing"]
    },
    {
        "id": 6,
        "title": "Recapitalization, $60M Series D support growth of e-commerce financier Clearco",
        "image": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1314165902.jpg?w=430&h=230&crop=1",
        "category": "Fintech",
        "author": "Christine Hall",
        "authorPic": "author1.jpg",
        "published_date": "2023-10-01",
        "reading_time": "5 minutes",
        "content": "Today is news marks a turnaround for a company that is had its share of ups and downs over the past year.",
        "tags": ["Blogging", "Writing"]
    },

    {
        "id": 7,
        "title": "Ask Sophie: What are the options for replacing an L-1A visa?",
        "image": "https://techcrunch.com/wp-content/uploads/2021/01/dear-sophie-immigration-maze-3.jpg?w=430&h=230&crop=1",
        "category": "Startups",
        "author": "Sophie Alcorn",
        "authorPic": "author1.jpg",
        "published_date": "October 4, 2023",
        "reading_time": "4 minutes",
        "content": "It is time for Congress to raise the numerical caps and eliminate the country-of-birth caps!",
        "tags": ["Work", "Blogging"]
    }
    
]

export default function Blogs() {
  return (
    <>
    

      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        {/* <Navbar topics={topics} /> */}
        {/* <Header /> */}

        <div className="px-0.5 md:px-7 pb-14 pt-6 mx-auto">
          <div className="flex flex-wrap">
            {blogs &&
              blogs.map(
                (blog) =>
                   (
                    <BlogHeader 
                      key={blog.id}
                      data={blog}
                      content={blog.content}
                      readTime={blog.reading_time}
                    />
                  )
              )}
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}