var articles = [
    // first sub array for cloud computing
    [ "Cloud Computing", // category title
        [
            "Azure Fundamentals AZ-900", // series title
            {"Title":"What is the cloud?", "Location":"./allArticles/AZ-900(AzureFundamentals)/introductionCloud.html","Image":"./allArticles/AZ-900(AzureFundamentals)/artWork/mainImage.jpg" }, // article 1
           // {"Title":"What is the cloud?", "Location":"./allArticles/AZ-900(AzureFundamentals)/introductionCloud.html","Image":"./allArticles/AZ-900(AzureFundamentals)/artWork/mainImage.jpg" } // article 1
        ]
    ]
    , // Cloud Computing category ends here
    [
        // "next category",
        // [
        //     "sub category"
        // ] 
    ]
]

class ManageFiles
{
    removeAll()
    {
        var myNode = document.getElementById("content");
        while (myNode.firstChild) 
        {
            myNode.removeChild(myNode.lastChild);
        }
    }
    displayAll()
    {
        var region = document.getElementById("content"); // main div where all the articles would be injected
        for(var i = 0;i<articles.length;i++)
        {
            // loop i is for each category
            var category = articles[i];
            var currentDivision = document.createElement("div");
            for(var j=0;j<category.length;j++)
            {
                //loop j is for category title and for series traversal;
                if(j==0)
                {
                    // category title at position 0
                    var title  = document.createElement("h1");
                    var text   = document.createTextNode(category[0]);
                    title.appendChild(text);
                    title.style.marginLeft = "1%";
                    title.style.fontSize = "50px";
                    currentDivision.appendChild(title);
                }
                else
                {
                    // seeries in each category
                    var series = category[j];
                    for(var k = 0;k<series.length;k++)
                    {
                        // loop k is for series title and article traversal
                        if(k==0)
                        {
                            // series title at position 0
                            var title = document.createElement("h2");
                            var text = document.createTextNode(series[0]);
                            title.appendChild(text);
                            title.style.marginLeft = "2%";
                            title.style.fontSize = "35px";
                            title.style.fontStyle = "italic";
                            currentDivision.appendChild(title);
                        }
                        else
                        {
                            // creating a division for the article and styling it
                            var articleDiv = document.createElement("div");
                            articleDiv.style.background = "#f1f1f1";
                            articleDiv.appendChild(document.createElement("br"));

                            // article image
                            var img = document.createElement("img");
                            img.src = series[k]["Image"];
                            img.style.width = "30%";
                            img.style.verticalAlign = 'middle';
                            img.style.margin = '0px 30px';
                            articleDiv.appendChild(img);

                            if(window.innerWidth<=800)
                            {
                                articleDiv.appendChild(document.createElement("br"));
                            }
                            // getting the title and location for the article
                            var title = document.createElement("a");
                            title.setAttribute('href',series[k]["Location"]);
                            var text = document.createTextNode(series[k]["Title"]);
                            title.appendChild(text);
                            // styling the link
                            title.style.textDecoration = "none";
                            title.style.fontSize = "25px";
                            title.style.textAlign = 'justify';
                            articleDiv.appendChild(title);

                           
                            articleDiv.appendChild(document.createElement("br"));
                            articleDiv.appendChild(document.createElement("br"));
                            currentDivision.appendChild(articleDiv); 
                        }
                    }
                }
            }
            //currentDivision.style.borderStyle = "solid";
            region.appendChild(currentDivision); // no of divisions = no of categories
        }
    }
    displayCategory(identifier)
    {
        var region = document.getElementById("content");
        var category = articles[identifier];
        var currentDivision = document.createElement("div");
        for(var j=0;j<category.length;j++)
        {
            //loop j is for category title and for series traversal;
            if(j==0)
            {
                // category title at position 0
                var title  = document.createElement("h1");
                var text   = document.createTextNode(category[0]);
                title.appendChild(text);
                title.style.marginLeft = "1%";
                title.style.fontSize = "50px";
                currentDivision.appendChild(title);
            }
            else
            {
                // seeries in each category
                var series = category[j];
                for(var k = 0;k<series.length;k++)
                {
                    // loop k is for series title and article traversal
                    if(k==0)
                    {
                        // series title at position 0
                        var title = document.createElement("h2");
                        var text = document.createTextNode(series[0]);
                        title.appendChild(text);
                        title.style.marginLeft = "2%";
                        title.style.fontSize = "35px";
                        title.style.fontStyle = "italic";
                        currentDivision.appendChild(title);
                    }
                    else
                    {
                        // creating a division for the article and styling it
                        var articleDiv = document.createElement("div");
                        articleDiv.style.background = "#f1f1f1";

                        articleDiv.appendChild(document.createElement("br"));

                        // article image
                        var img = document.createElement("img");
                        img.src = series[k]["Image"];
                        img.style.width = "30%";
                        img.style.verticalAlign = 'middle';
                        img.style.margin = '0px 30px';
                        articleDiv.appendChild(img);

                        if(window.innerWidth<=800)
                        {
                            articleDiv.appendChild(document.createElement("br"));
                        }
                        // getting the title and location for the article
                        var title = document.createElement("a");
                        title.setAttribute('href',series[k]["Location"]);
                        var text = document.createTextNode(series[k]["Title"]);
                        title.appendChild(text);
                        // styling the link
                        title.style.textDecoration = "none";
                        title.style.fontSize = "25px";
                        articleDiv.appendChild(title);

                           
                        articleDiv.appendChild(document.createElement("br"));
                        articleDiv.appendChild(document.createElement("br"));
                        currentDivision.appendChild(articleDiv); 
                    }
                }
            }
        }
        region.appendChild(currentDivision); // no of divisions = no of categories
     }
}

function loadAllArticles()
{
    var Manage = new ManageFiles();
    Manage.displayAll();
   
}

function loadSelected(identifier)
{
    var Manage = new ManageFiles();
    Manage.removeAll();
    if(identifier==0)
    {
        Manage.displayAll();
    }
    else
    {
        Manage.displayCategory(identifier-1);
    }
}