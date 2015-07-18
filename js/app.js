(function() {
    var clicked = [];

    /* Makes the chosen segment of the story appear and scrolls to the top of it.
     * Hides the buttons after the choice is made.
     */
    function showNext(chosen) {
        // add to array
        // hide buttons
        $(".option").hide()
        chosen.show();
        $('html, body').animate({
            scrollTop: chosen.offset().top
        }, 1000);
    }

    /* Undoes the last decision made, hides the most recent segment, and returns to
     * to the previous one.
     */
    function undo(current, previous) {
        // remove from array
        // show buttons again
        $('html, body').animate({
            scrollTop: previous.offset().top
        }, 1000, "swing", function() {
            current.hide();
        });
    }


    $( document ).ready(function() {
        $(".checkpoint").not(".intro").hide();

        // intro
        $("button#bus-intro").on("click", function() {
            showNext($(".bus-intro"));
        });
        $("button#walk-intro").on("click", function() {
            showNext($(".walk-intro"));
        });

        // bus-intro
        $("button#bus-pluto").on("click", function() {
            showNext($(".bus-pluto"));
        });
        $("button#bus-alien").on("click", function() {
            showNext($(".bus-alien"));
        });

        // bus-alien
        $("button.bus-build-button").on("click", function() {
            showNext($(".bus-build"));
        });
        // bus-build
        $("button#bus-right").on("click", function() {
            showNext($(".bus-alien-final"));
        });

        // bus-pluto
        $("button#bus-contest").on("click", function() {
            showNext($(".bus-contest"));
        });
        $("button#bus-telescope").on("click", function() {
            showNext($(".bus-telescope"));
        });

        // bus-contest
        $("button#bus-judge").on("click", function() {
            showNext($(".bus-judge"));
        });
        $("button#bus-vote").on("click", function() {
            showNext($(".bus-vote"));
        });

        // bus-judge
        $("button#bus-judgeAgree").on("click", function() {
            showNext($(".bus-noParticipate"));
        });
        $("button#bus-judgeDisagree").on("click", function() {
            showNext($(".bus-participate"));
        });

        // bus-vote
        $("button#bus-voteAgree").on("click", function() {
            showNext($(".bus-noParticipate"));
        });
        $("button#bus-voteDisagree").on("click", function() {
            showNext($(".bus-participate"));
        });

        // bus-telescope
        $("button#bus-otherguy").on("click", function() {
            showNext($(".bus-finishtele"));
        });
        $("button#bus-ownplans").on("click", function() {
            showNext($(".bus-finishtele"));
        });

        // bus-finishtele
        $("button#bus-moretele").on("click", function() {
            showNext($(".bus-moretele"));
        });
        $("button#bus-onetele").on("click", function() {
            showNext($(".bus-onetele"));
        });

        // walk-intro
        $("button#walk-fireyourself").on("click", function() {
            showNext($(".walk-done"));
        });
        $("button#walk-fireelse").on("click", function() {
            showNext($(".walk-done"));
        });

        // walk-done
        $("button#walk-elf").on("click", function() {
            showNext($(".walk-elf"));
        });
        $("button#walk-dwarf").on("click", function() {
            showNext($(".walk-dwarf"));
        });

        // walk-elf
        $("button#walk-stoptalk").on("click", function() {
            showNext($(".walk-stoptalk"));
        });
        $("button#followelhir").on("click", function() {
            showNext($(".followelhir"));
        });

        // walk-stoptalk
        $("button#walk-voice").on("click", function() {
            showNext($(".walk-voice"));
        });
        $("button#walk-flower").on("click", function() {
            showNext($(".walk-flower"));
        });

        // walk-voice / walk-flower ugh the doubled ids could be problematic but i'm too tired to care rn i am sorry you guys
        $("button#walk-wander").on("click", function() {
            showNext($(".walk-wander"));
        });
        $("button#walk-directions").on("click", function() {
            showNext($(".walk-directions"));
        });

        // walk-followelhir
        $("button#walk-phonemusic").on("click", function() {
            showNext($(".walk-phonemusic"));
        });
        $("button#walk-ownmusic").on("click", function() {
            showNext($(".walk-ownmusic"));
        });

        // walk-dwarf
        $("button#walk-bridge").on("click", function() {
            showNext($(".walk-bridge"));
        });
        $("button#walk-physics").on("click", function() {
            showNext($(".walk-physics"));
        });

        // walk-bridge
        $("button#walk-baking").on("click", function() {
            showNext($(".walk-baking"));
        });
        $("button#walk-sales").on("click", function() {
            showNext($(".walk-sales"));
        });

        // show careers

        $("button#cp-3").on("click", function() {
            showNext($(".cp-3"));
        });


    });
})();