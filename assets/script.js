// $(document).ready(function() {

// }

$(document).on("click", ".charParam", function (event) {
    event.preventDefault();
    console.log($(this).attr("data-query"))
    console.log($(this));

    let paramState = $(this).attr("data-query");
    let listItem = $("<li>").text(paramState)

    $("#paramsHere").append(listItem)

    let queryURL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/" + paramState + "?key=fddebecb-2b1d-433f-a3e5-00ea82e85751";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (res) {
            console.log(res[0].meta.syns[0]);
            // LOOKING FOR THE DATA OF EACH RETURNED OBJECT, LOOPING THROUGH THR TEN RETURNED
            var result = res[0].meta.syns[0];

            randoSyn = result[Math.floor(Math.random() * result.length)]
            console.log(`charSyn: ${randoSyn}`)

            sessionStorage.setItem("charSyn", randoSyn)
        })
})

// SCRAPE
// axios.get("https://www.newyorker.com/cartoons/contest")
// .then(function (response) {

//     let $ = cheerio.load(response.data);

//     $("div Image__image___1PhYl CaptionSubmissionStage__cartoon___14mwh").each(function(i, element) {

//         const imgURL = $(element).children("a").attr("url");
//     })
// })
// END SCRAPE

$(document).on("click", ".locationParam", function (event) {
    event.preventDefault();
    console.log($(this).attr("data-query"))
    console.log($(this));

    let paramState = $(this).attr("data-query");
    let listItem = $("<li>").text(paramState)

    $("#paramsHere").append(listItem)

    let queryURL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/" + paramState + "?key=fddebecb-2b1d-433f-a3e5-00ea82e85751";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (res) {
            console.log(res[0].meta.syns[0]);
            // LOOKING FOR THE DATA OF EACH RETURNED OBJECT, LOOPING THROUGH THR TEN RETURNED
            var result = res[0].meta.syns[0];

            randoSyn = result[Math.floor(Math.random() * result.length)]
            console.log(`locationSyn: ${randoSyn}`)

            sessionStorage.setItem("locationSyn", randoSyn)
        })
})



$("#captionBtn").on("click", function(event) {
    event.preventDefault();
   
    let location = sessionStorage.getItem("locationSyn")
    let char = sessionStorage.getItem("charSyn")

    let caption = `So that's ${char} ${location}?`

    $("#captionText").append(caption)


})

$("#clear").on("click", function(event) {
    event.preventDefault();
    $("#captionText").html("");
    $("#paramsHere").html("");
}
);