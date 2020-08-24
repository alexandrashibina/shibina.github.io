const findBlockByAlias = (alias) => {
    return $(".reviews__display-inner").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias;
    });
};

$(".interactive-avatar__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const currItem = $this.closest(".interactive-avatar__link");

    itemToShow.addClass("active").siblings().removeClass("active");
    currItem.addClass("active").siblings().removeClass("active");
});