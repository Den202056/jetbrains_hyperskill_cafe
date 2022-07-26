const reviewForm = document.getElementById("reviewForm");

reviewForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById ("reviewTitle");
    const comment = document.getElementById ("reviewText");
    const name = document.getElementById ("reviewName");

    if (name.value === "") {
        name.value = "Anonymous";
    }

    const reviewsRowList = document.getElementById("reviewsRow");
    let reviewsRowItem = reviewsRowList.children;

    const newReviewCard = reviewsRowItem[0].cloneNode(true);

    let cardTitle = newReviewCard.querySelector(".card-title");
    cardTitle.innerText = title.value;

    let cardComment = newReviewCard.querySelector("p");
    cardComment.innerText = comment.value;

    let cardFooter = newReviewCard.querySelector("i");
    cardFooter.innerText = name.value;

    reviewsRowList.appendChild(newReviewCard);
});