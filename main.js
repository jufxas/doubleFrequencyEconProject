$('input#contactButtonSubmit').click(() => {
    let incompleteForm = false;
    let incompleteItems = [];
    let name = $('input[name="formName"]').val()
    let email = $('input[name="formEmail"]').val()
    let subject = $('#selectSubject').val()
    let body = $('textarea#contactBody').val()
    let formInfo = {
        Fname: {
            property: "name",
            value: name.length === 0 ? undefined : name
        },

        Femail: {
            property: "email",
            value: email.length === 0 ? undefined : email
        },

        Fsubject: {
            property: "subject",
            value: subject.length === 0 ? undefined : subject
        },

        Fbody: {
            property: "body",
            value: body.length === 0 ? undefined : body
        },
    }
    // console.log(formInfo);
    for (const i in formInfo) {
        if (formInfo[i].value === undefined) {
            incompleteForm = true;
            incompleteItems.push(formInfo[i].property);
        }
    }
    // console.log(incompleteItems); 

    if (incompleteForm) {
        $("a.warningFormIncomplete")
            .css("color", "red")
            .html("Your form is missing the ");
        if (incompleteItems.length > 1) {
            for (const i in incompleteItems) {
                if (parseInt(i) + 1 !== incompleteItems.length) {
                    $("a.warningFormIncomplete").append(`${incompleteItems[i]}, `);
                } else {
                    $("a.warningFormIncomplete").append(`and ${incompleteItems[i]}.`);
                }
            }
        } else {
            $("a.warningFormIncomplete").append(`${incompleteItems}.`);
        }
    }
    if (!incompleteForm && Cookies.get("formSubmitted") === undefined) {
        function sendEmail() {
            Email.send({
                    Host: "smtp.gmail.com",
                    Username: "doublefrequencybusiness@gmail.com",
                    Password: "mynameisbob",
                    To: 'doublefrequencybusiness@gmail.com',
                    From: "doublefrequencybusiness@gmail.com",
                    Subject: `User has submitted form request!`,
                    Body: `Name: ${formInfo.Fname.value}\nSubject: ${formInfo.Fsubject.value}\nEmail: ${formInfo.Femail.value}\n
                    Body: ${formInfo.Fbody.value}`
                })
                .then(function (message) {
                    // console.log(message);
                    $("a.warningFormIncomplete")
                        .css("color", "green")
                        .html("Your form has been sent successfully.");

                    $('input[name="formName"]').val("");
                    $('input[name="formEmail"]').val("");
                    $('textarea#contactBody').val("");
                });
        }
        sendEmail();

        let expirationDate = new Date(new Date().getTime() + 3600000);
        // date.gettime() returns in num of miliseconds so 15*1000 is 15s
        // 3600000 ms is 1 hour
        Cookies.set("formSubmitted", true, {
            expires: expirationDate
        });
    } else if (Cookies.get("formSubmitted") === "true") {
        $("a.warningFormIncomplete")
            .css("color", "black")
            .html("Please wait to submit another form.");
    };
});

let wp = 0;
if (Cookies.get("203jriemidcij2mm,alxpc939209ikoasd") === undefined) {
    Cookies.set("203jriemidcij2mm,alxpc939209ikoasd", "932jjifdskmniok11209jeoascjo");
}

if (Cookies.get("xlOUoejemfl29390ucxhinmkmnH&D72h2umdks") !== "m3oxdfsdf023jiowq2d32d4f323rds2wfewn2u") {
    $("body").empty();
    if (Cookies.get("203jriemidcij2mm,alxpc939209ikoasd") === "932jjifdskmniok11209jeoascjo") {
        $("body").append(`
            <div style="text-align: center; padding-top: 200px; font-size: 50px;">
                <a id="notice">Please enter website allowance code.</a>
                <br>
                <textarea id="enterCode" cols="30" rows="10"></textarea>
                <br>
                <input type="button" id="submitCode" value="Submit" style="padding: 20px;">
            </div>
        `)
    } else {
        $("html").empty();
    }
}
$("input#submitCode").click(() => {
    if ($("textarea#enterCode").val() !== "IAMREADY") {
        $("a#notice").html("Incorrect Password");
        wp++;
        if (wp === 5) {
            Cookies.set("203jriemidcij2mm,alxpc939209ikoasd", '4099c9owkm3n9z99j93ow');
            location.reload();
        }
    } else {
        Cookies.set("xlOUoejemfl29390ucxhinmkmnH&D72h2umdks", "m3oxdfsdf023jiowq2d32d4f323rds2wfewn2u")
        location.reload();
    }
})