// default values
sessionStorage.setItem('fullname', 'sahib singh');

sessionStorage.setItem('email', 'abc@gmail.com');
sessionStorage.setItem('mobnum', '9080706050');
sessionStorage.setItem('bankname', 'Bank of Baroda');
sessionStorage.setItem('branchname', 'Kurukshetra');
sessionStorage.setItem('ifsc', '119023');
sessionStorage.setItem('accnum', '33456765343');

let fname = sessionStorage.getItem('fullname');
let email = sessionStorage.getItem('email');
let mobnum = sessionStorage.getItem('mobnum');
let bankname = sessionStorage.getItem('bankname');
let branchname = sessionStorage.getItem('branchname');
let ifsc = sessionStorage.getItem('ifsc');
let accnum = sessionStorage.getItem('accnum');

document.getElementById("sepakinstruction").addEventListener("click", () => {
    const text = "यदि आप एक विक्रेता हैं तो कृपया विक्रेता फॉर्म भरें या यदि आप एक खरीदार हैं तो कृपया खरीदार पंजीकरण फॉर्म भरें आप पिछले आदेशों की जांच कर सकते हैं और खाता विवरण अनुभाग में आप अपने द्वारा बेचे गए सामान की राशि निकाल सकते हैं"
    responsiveVoice.speak(text, "Hindi Female");
})


$('input').focus(function (event) {
    $(this).closest('.float-label-field').addClass('float').addClass('focus');
})

$('input').blur(function () {
    $(this).closest('.float-label-field').removeClass('focus');
    if (!$(this).val()) {
        $(this).closest('.float-label-field').removeClass('float');
    }
});
$('#sample').click(() => {
    $('#file-sample').css('display', 'block');
    setInterval(function () {
        $('#file-sample').css('display', 'none');
    }, 500);
})
$('#seller_').click(function () {
    if ($('#buy-reg1').is(":visible")) {
        $('#buy-reg1').css('display', 'none');
    }
    $('#artist-reg1').css('display', 'flex');
    console.log('shfhsf');
})
$('#buyer_').click(function () {
    if ($('#artist-reg1').is(":visible")) {
        $('#artist-reg1').css('display', 'none');
    }
    $('#buy-reg1').css('display', 'flex');
    console.log('shfhsf');
})

document.getElementById('details_').addEventListener('click', () => {
    console.log('bdhcsdbc');
    if (document.getElementById('details-cont').style.display == 'flex')
        document.getElementById('details-cont').style.display == 'none';
    document.getElementById('main-det-cont').innerHTML =
        `
<div class="det-info">Name : ${fname}</div>
<div class="det-info">Email : ${email}</div>
<div class="det-info">Mobile Number : ${mobnum}</div>
`;
    document.getElementById('details-cont').style.display = "flex";
});

document.getElementById('orders_').addEventListener('click', () => {
    if (document.getElementById('details-cont').style.display == 'flex')
        document.getElementById('details-cont').style.display == 'none';
    document.getElementById('main-det-cont').innerHTML =
        `
<div class="det-info">Nothing ordered yet</div>
`;
    document.getElementById('details-cont').style.display = "flex";
})

document.getElementById('sell__').addEventListener('click', () => {
    if (document.getElementById('details-cont').style.display == 'flex')
        document.getElementById('details-cont').style.display == 'none';
    document.getElementById('main-det-cont').innerHTML =
        `
        <div id="selling_content">
                    <label>Name of Product </label>
                    <input type="text" />
                    <label>Details of Product</label>
                    <input type="text" />
                    <label>Category</label>
                    <input type="text" />
                    <label>Price Range</label>
                    <input type="number" />
                    <label>Product Images</label>
                    <input type="file" id="image_input">
                    <div id="display_image"></div>
        </div>
`;
    document.getElementById('details-cont').style.display = "flex";
    const image_input = document.getElementById("image_input");
    var uploaded_image;

    image_input.addEventListener('change', function () {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            uploaded_image = reader.result;
            document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
        });
        reader.readAsDataURL(this.files[0]);
    });
})




document.getElementById('acc-details').addEventListener('click', () => {
    if (document.getElementById('details-cont').style.display == 'flex')
        document.getElementById('details-cont').style.display == 'none';
    document.getElementById('main-det-cont').innerHTML =
        `
        <div class="det-info">Bank Name: ${bankname}</div>
        <div class="det-info">Branch Name: ${branchname}</div>
        <div class="det-info">Bank Name: ${ifsc}</div>
        <div class="det-info">Bank Name: ${accnum}</div>
`;
    document.getElementById('details-cont').style.display = "flex";
})

$('#txtName1').click(function () {
    $('#txtName1').blur(function () {
        let value_ = $('#txtName1').val();
        console.log(value_);
        sessionStorage.setItem('fullname1', value_);
    })

})
$('#Address1').click(function () {
    $('#Address1').blur(function () {
        let value_ = $('#Address1').val();
        console.log(value_);
        sessionStorage.setItem('addressline21', value_);
    })

})
$('#Address2').click(function () {
    $('#Address2').blur(function () {
        let value_ = $('#Address2').val();
        console.log(value_);
        sessionStorage.setItem('addressline22', value_);
    })

})

$('#town1').click(function () {
    $('#town1').blur(function () {
        let value_ = $('#town1').val();
        console.log(value_);
        sessionStorage.setItem('town2', value_);
    })

})
$('#state1').click(function () {
    $('#state1').blur(function () {
        let value_ = $('#state1').val();
        console.log(value_);
        sessionStorage.setItem('state1', value_);
    })

})
$('#Pincode1').click(function () {
    $('#Pincode1').blur(function () {
        let value_ = $('#Pincode1').val();
        console.log(value_);
        sessionStorage.setItem('pincode2', value_);
    })

})
$('#bankName').click(function () {
    $('#bankName').blur(function () {
        let value_ = $('#bankName').val();
        console.log(value_);
        sessionStorage.setItem('bankname', value_);
    })

})
$('#branchName').click(function () {
    $('#branchName').blur(function () {
        let value_ = $('#branchName').val();
        console.log(value_);
        sessionStorage.setItem('branchname', value_);
    })

})
$('#ifscCode').click(function () {
    $('#ifscCode').blur(function () {
        let value_ = $('#ifscCode').val();
        console.log(value_);
        sessionStorage.setItem('ifsc', value_);
    })

})
$('#Account-num').click(function () {
    $('#Account-num').blur(function () {
        let value_ = $('#Account-num').val();
        console.log(value_);
        sessionStorage.setItem('accnum', value_);
    })

})
$('#txtEmail2').click(function () {
    $('#txtEmail2').blur(function () {
        let value_ = $('#txtEmail2').val();
        console.log(value_);
        sessionStorage.setItem('email21', value_);
    })

})
$('#number2').click(function () {
    $('#number2').blur(function () {
        let value_ = $('#number2').val();
        console.log(value_);
        sessionStorage.setItem('mobnum', value_);
    })

})
$('#checkbx').click(function () {
    $('#checkbx').blur(function () {
        let value_ = $('#checkbx').val();
        console.log(value_);
        sessionStorage.setItem('accepted_terms2', value_);
    })

})
$('#art-submit').click(function () {
    $('#art-submit').blur(function () {
        let value_ = $('#art-submit').val();
        console.log(value_);
        sessionStorage.setItem('art-submit', value_);
    })

})



$('#txtName').click(function () {
    $('#txtName').blur(function () {
        let value_ = $('#txtName').val();
        console.log(value_);
        sessionStorage.setItem('fullname', value_);
    })

})
$('#Address21').click(function () {
    $('#Address21').blur(function () {
        let value_ = $('#Address21').val();
        console.log(value_);
        sessionStorage.setItem('address21', value_);
    })

})
$('#Address22').click(function () {
    $('#Address22').blur(function () {
        let value_ = $('#Address22').val();
        console.log(value_);
        sessionStorage.setItem('address22', value_);
    })

})
$('#town').click(function () {
    $('#town').blur(function () {
        let value_ = $('#town').val();
        console.log(value_);
        sessionStorage.setItem('town', value_);
    })

})

$('#state').click(function () {
    $('#state').blur(function () {
        let value_ = $('#state').val();
        console.log(value_);
        sessionStorage.setItem('state', value_);
    })

})
$('#Pincode').click(function () {
    $('#Pincode').blur(function () {
        let value_ = $('#Pincode').val();
        console.log(value_);
        sessionStorage.setItem('pincode', value_);
    })

})

$('#txtEmail').click(function () {
    $('#txtEmail').blur(function () {
        let value_ = $('#txtEmail').val();
        console.log(value_);
        sessionStorage.setItem('email', value_);
    })

})
$('#txtEmai22').click(function () {
    $('#txtEmail22').blur(function () {
        let value_ = $('#txtEmail2').val();
        console.log(value_);
        sessionStorage.setItem('alt_email', value_);
    })

})
$('#number').click(function () {
    $('#number').blur(function () {
        let value_ = $('#number').val();
        console.log(value_);
        sessionStorage.setItem('mobnum', value_);
    })

})
$('#website').click(function () {
    $('#website').blur(function () {
        let value_ = $('#website').val();
        console.log(value_);
        sessionStorage.setItem('website', value_);
    })

})
$('#sample').click(function () {
    $('#sample').blur(function () {
        let value_ = $('#sample').val();
        console.log(value_);
        sessionStorage.setItem('sample_uploaded', value_);
    })

})
$('#checkbx1').click(function () {
    $('#checkbx1').blur(function () {
        let value_ = $('#checkbx1').val();
        console.log(value_);
        sessionStorage.setItem('checked1', value_);
    })

})
$('#submit2').click(function () {
    $('#submit2').blur(function () {
        let value_ = $('#submit2').val();
        console.log(value_);
        sessionStorage.setItem('submit2', value_);
    })

})