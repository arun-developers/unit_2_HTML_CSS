
    var investers =
        [
            {
                id: 1,
                name: "Vijay Shekhar Sharma",
                image:
                    "https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg",
                role: "Co-Founder & CEO",
                companyLogo:
                    "https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_rect_06df45a24f.svg",
            },
            {
                id: 2,
                name: "Kunal Shah",
                image:
                    "https://masai-website-images.s3.ap-south-1.amazonaws.com/Rectangle_427_637d69bb57.png",
                role: "Founder",
                companyLogo:
                    "https://masai-website-images.s3.ap-south-1.amazonaws.com/cred_0a47d7b4f8.png",
            },
            {
                id: 3,
                name: "Amrish Rau",
                image:
                    "https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg",
                role: "CEO",
                companyLogo:
                    "https://masai-website-images.s3.ap-south-1.amazonaws.com/pine_labs_0aa2407434.png",
            },
            {
                id: 4,
                name: "Sampad Swain",
                image:
                    "https://masai-website-images.s3.ap-south-1.amazonaws.com/Sampad_swain_Instamojo_f12bf6341e.jpg",
                role: "Co-Founder & CEO",
                companyLogo:
                    "https://masai-website-images.s3.ap-south-1.amazonaws.com/instamojo_8763e704f7.png",
            },
        ]
    investers.map(function (elements, index, array) {
        var box = document.createElement("div");
        box.setAttribute("class", "boxes");

        var name = document.createElement("h2");
        name.textContent = elements.name;
        name.setAttribute("class", "head");


        var img = document.createElement("img");
        img.src = elements.image;
        img.setAttribute("class", "image1");


        var companyName = document.createElement("h4");
        companyName.textContent = elements.role;
        companyName.setAttribute("class", "head4");

        var companyLogo = document.createElement("img");
        companyLogo.src = elements.companyLogo;
        companyLogo.setAttribute("class", "logo");


        box.append(img, name, companyName, companyLogo);
        document.querySelector("#container").append(box);

    })