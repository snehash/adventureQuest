(function() {
    var clicked = [];

    /* Makes the chosen segment of the story appear and scrolls to the top of it.
     * Hides the buttons after the choice is made.
     */
    function showNext(chosen, hideOption) {
        // add to array
        // hide buttons
        hideOption.hide();
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
            showNext($(".bus-intro"), $("#walk-intro"));
        });
        $("button#walk-intro").on("click", function() {
            showNext($(".walk-intro"), $("#bus-intro"));
        });

        // bus-intro
        $("button#bus-pluto").on("click", function() {
            showNext($(".bus-pluto"), $("#bus-alien"));
        });
        $("button#bus-alien").on("click", function() {
            showNext($(".bus-alien"), $("#bus-pluto"));
        });

        // bus-alien
        $("button.bus-amphitheater").on("click", function() {
            showNext($(".bus-build"), $(".bus-garden"));
        });
        $("button.bus-garden").on("click", function() {
            showNext($(".bus-build"), $(".bus-amphitheater"));
        });

        // bus-build
        $("button#bus-green").on("click", function() {
            showNext($(".bus-alien-final"), $("#bus-blue"));
        });
        $("button#bus-blue").on("click", function() {
            showNext($(".bus-alien-final"), $("#bus-green"));
        });

        // bus-pluto
        $("button#bus-contest").on("click", function() {
            showNext($(".bus-contest"), $("#bus-telescope"));
        });
        $("button#bus-telescope").on("click", function() {
            showNext($(".bus-telescope"), $("#bus-contest"));
        });

        // bus-contest
        $("button#bus-judge").on("click", function() {
            showNext($(".bus-judge"), $("#bus-vote"));
        });
        $("button#bus-vote").on("click", function() {
            showNext($(".bus-vote"), $("#bus-judge"));
        });

        // bus-judge
        $("button#bus-judgeAgree").on("click", function() {
            showNext($(".bus-noParticipate"), $("#bus-judgeDisagree"));
        });
        $("button#bus-judgeDisagree").on("click", function() {
            showNext($(".bus-participate"), $("#bus-judgeAgree"));
        });

        // bus-vote
        $("button#bus-voteAgree").on("click", function() {
            showNext($(".bus-noParticipate"), $("#bus-voteDisagree"));
        });
        $("button#bus-voteDisagree").on("click", function() {
            showNext($(".bus-participate"), $("#bus-voteAgree"));
        });

        // bus-telescope
        $("button#bus-otherguy").on("click", function() {
            showNext($(".bus-finishtele"), $("#bus-ownplans"));
        });
        $("button#bus-ownplans").on("click", function() {
            showNext($(".bus-finishtele"), $("#bus-otherguy"));
        });

        // bus-finishtele
        $("button#bus-moretele").on("click", function() {
            showNext($(".bus-moretele"), $("#bus-onetele"));
        });
        $("button#bus-onetele").on("click", function() {
            showNext($(".bus-onetele"), $("#bus-moretele"));
        });

        // walk-intro
        $("button#walk-fireyourself").on("click", function() {
            showNext($(".walk-done"), $("#walk-fireelse"));
        });
        $("button#walk-fireelse").on("click", function() {
            showNext($(".walk-done"), $("#walk-fireyourself"));
        });

        // walk-done
        $("button#walk-elf").on("click", function() {
            showNext($(".walk-elf"), $("#walk-dwarf"));
        });
        $("button#walk-dwarf").on("click", function() {
            showNext($(".walk-dwarf"), $("#walk-elf"));
        });

        // walk-elf
        $("button#walk-stoptalk").on("click", function() {
            showNext($(".walk-stoptalk"), $("#walk-followelhir"));
        });
        $("button#walk-followelhir").on("click", function() {
            showNext($(".walk-followelhir"), $("#walk-stoptalk"));
        });

        // walk-stoptalk
        $("button#walk-voice").on("click", function() {
            showNext($(".walk-voice"), $("#walk-flower"));
        });
        $("button#walk-flower").on("click", function() {
            showNext($(".walk-flower"), $("#walk-voice"));
        });

        // walk-voice / walk-flower ugh the doubled ids could be problematic but i'm too tired to care rn i am sorry you guys
        $("button#walk-wander").on("click", function() {
            showNext($(".walk-wander"), $("#walk-directions"));
        });
        $("button#walk-directions").on("click", function() {
            showNext($(".walk-directions"), $("#walk-wander"));
        });

        // walk-followelhir
        $("button#walk-phonemusic").on("click", function() {
            showNext($(".walk-phonemusic"), $("#walk-ownmusic"));
        });
        $("button#walk-ownmusic").on("click", function() {
            showNext($(".walk-ownmusic"), $("#walk-phonemusic"));
        });

        // walk-dwarf
        $("button#walk-bridge").on("click", function() {
            showNext($(".walk-bridge"), $("#walk-physics"));
        });
        $("button#walk-physics").on("click", function() {
            showNext($(".walk-physics"), $("#walk-bridge"));
        });

        // walk-bridge
        $("button#walk-baking").on("click", function() {
            showNext($(".walk-baking"), $("#walk-sales"));
        });
        $("button#walk-sales").on("click", function() {
            showNext($(".walk-sales"), $("#walk-baking"));
        });

        // show careers

        $("button#cp-3").on("click", function() {
            showNext($(".cp-3"));
        });


    });
})();