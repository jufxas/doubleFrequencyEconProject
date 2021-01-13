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

const _0x5613 = ['518539clFeFF', '2rLlhid', 'click', 'set', '72886gyENFc', '14PWfyGX', 'IAMREADY', 'input#submitCode', 'm3oxdfsdf023jiowq2d32d4f323rds2wfewn2u', 'html', '458865DLjnft', 'xlOUoejemfl29390ucxhinmkmnH&D72h2umdks', '203jriemidcij2mm,alxpc939209ikoasd', 'textarea#enterCode', '293154BlQzIi', 'body', '3cIOkFF', 'append', '4099c9owkm3n9z99j93ow', '2eMnDuq', 'get', '172967PkAlgb', 'val', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding-top:\x20200px;\x20font-size:\x2050px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20id=\x22notice\x22>Please\x20enter\x20website\x20allowance\x20code.</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22enterCode\x22\x20cols=\x2230\x22\x20rows=\x2210\x22></textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22button\x22\x20id=\x22submitCode\x22\x20value=\x22Submit\x22\x20style=\x22padding:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '932jjifdskmniok11209jeoascjo', '199646fQiTdA', 'empty', '580178DvwTor'];
const _0x12ba = function (_0x2ba729, _0xbb475f) {
    _0x2ba729 = _0x2ba729 - 0x139;
    let _0x561333 = _0x5613[_0x2ba729];
    return _0x561333;
};
const _0x5a4e9e = _0x12ba;
(function (_0xe546c3, _0x1268e2) {
    const _0x530819 = _0x12ba;
    while (!![]) {
        try {
            const _0x3c004c = parseInt(_0x530819(0x145)) + -parseInt(_0x530819(0x152)) + -parseInt(_0x530819(0x148)) + -parseInt(_0x530819(0x14d)) * parseInt(_0x530819(0x14c)) + -parseInt(_0x530819(0x149)) * -parseInt(_0x530819(0x147)) + -parseInt(_0x530819(0x141)) * -parseInt(_0x530819(0x13f)) + parseInt(_0x530819(0x13a)) * parseInt(_0x530819(0x13c));
            if (_0x3c004c === _0x1268e2) break;
            else _0xe546c3['push'](_0xe546c3['shift']());
        } catch (_0x13f1de) {
            _0xe546c3['push'](_0xe546c3['shift']());
        }
    }
}(_0x5613, 0x8f746));
let wp = 0x0;
Cookies['get'](_0x5a4e9e(0x154)) === undefined && Cookies[_0x5a4e9e(0x14b)]('203jriemidcij2mm,alxpc939209ikoasd', _0x5a4e9e(0x144));
Cookies[_0x5a4e9e(0x140)]('xlOUoejemfl29390ucxhinmkmnH&D72h2umdks') !== _0x5a4e9e(0x150) && ($('body')['empty'](), Cookies['get'](_0x5a4e9e(0x154)) === '932jjifdskmniok11209jeoascjo' ? $(_0x5a4e9e(0x13b))[_0x5a4e9e(0x13d)](_0x5a4e9e(0x143)) : $(_0x5a4e9e(0x151))[_0x5a4e9e(0x146)]());
$(_0x5a4e9e(0x14f))[_0x5a4e9e(0x14a)](() => {
    const _0xf351bd = _0x5a4e9e;
    $(_0xf351bd(0x139))[_0xf351bd(0x142)]() !== _0xf351bd(0x14e) ? ($('a#notice')[_0xf351bd(0x151)]('Incorrect\x20Password'), wp++, wp === 0x5 && (Cookies[_0xf351bd(0x14b)]('203jriemidcij2mm,alxpc939209ikoasd', _0xf351bd(0x13e)), location['reload']())) : (Cookies[_0xf351bd(0x14b)](_0xf351bd(0x153), _0xf351bd(0x150)), location['reload']());
});