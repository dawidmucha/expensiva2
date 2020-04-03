const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        email: { type: String },
        password: { type: String },
        settings: {
            avatar: { type: String, default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABDCAYAAAAlFqMKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMjSURBVHhe7ZrZaipBEEDv//+FcY3iQx6iqPHJDTRBiQvu+id9OcJwSVPhql01Y0I/HAjRrqo+09vM+Od8PrvIP6IQjyjEIwrxiEI8ohCPKMQjCvGIQjyiEI8oxCMK8YhCPKIQj0yEHI/HC4vFwvV6Pdftdi/wN/9LPpfaWpOakNPpdOnkx8eHa7fbrlwuu3w+756enr7A//iM7/Bd2tBWimlBKkLo0Hq9dvV6/dLpXC53FXyXNrRNS4q5EDoyGo1csVgUO30NtCVGGlJMhdCBfr9/mQZSR2+BGMSylmIq5P39XUVGArGIKeXSwkQIV3E+n7tCoSB2LARiEttqpJgIYWdoNBo3LaDXQkxiW23L6kK4crvdzkRGArHJYTFK1IVw5V5fX8WOaEIOi1GiLmS/37tqtSp2QhNykEuqIQR1IcvlMujMcS3kIJdUQwjqQmazmen6kUAOckk1hKAuZDqdpiaEXFINIcQR4qEuxOpA5pMc0KQaQlAXwvng+flZ7IQm5CCXVEMI6kI4G7y8vIid0IQcP+Icwulxs9mIndCEHD/ipArWo8RqdICJEK7cZDJRvfVPICaxLUYHmAhJGAwGqlswsYgp5dLCVAjDutVqqUghBrGspkqCqRCgA7xiCJk+tCWGtQwwFwJ0hGP2PQc22tA2DRlgLuRwOLjxeHz3EzTa0JYYxJJyaGImhF2At3C1Wk1ltyEGsYhptcOAiRCGN68lLZ6LEJPYVlNIXQhPsVgApc5oQo6Hf2JGgZ1OR2Wb/R/kIJe2FDUhDOG3t7dUZCSQi5ya00dNyHA4VFk8b4Wc5JZqugcVIavVKpWHQt9BbmqQaruVYCFsgc1mM9Wp4kNuatDYjoOEUMDn52emMhKogVpCpQQJYTHjhksqMAs0bv6ChLDlVSoVsbgsoJbQbfhuIQxNFjKpsCyhppBpEySEM4BUVJZQUyZCmKv8IE4qKkuoKWQdCRJSKpXEorKEmjIRwuKV5WHsO6gpZGENEsKtOAU8EtSUiRAWLl4lbrfbhyL0p1Z3C/mtRCEeUYhHFOIRhXhEIR5RiEcU4hGFfOHs/gJjs0pA/X3zQgAAAABJRU5ErkJggg==" },
            timeFormat: { type: String, default: "12H" },
            currencySymbol: { type: String, default: "$" },
            currencyAffix: { type: String, default: "suffix" }
        },
        categories: [{
            name: { type: String },
            subcategories: [{ name: String }]
        }],
        shops: [{
            name: { type: String },
            icon: { type: String, default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAAB3RJTUUH5AMcChEP0p/alAAAAAFvck5UAc+id5oAAAWcSURBVFjDlZhLbBtFGIC/mbW9duLYTeLUTVtHbUmp0qJGVekjAUGhiKoIuFCJC0ICceGEEFIlLpADx944IKEKwQUBQkhtUQFRaKRe2lQqkUKkViF9pEmbpnk5cfxa7w6H9Tobe+11/714xvPPN/9jZv8dgY8MVXcIQPmM8VDxnz7CFnpI0U4bOpBnhXnuM8UcRX+U8AGE2MMAB9lBnBDCZYlFkUUmGeEqdzAbgUQDRIQjvMEBNiGwql1U1pZYzHOVC4xSqocRdQCCA7zDEVrqTF+NSnOZ75nwtkfzRER5l4/Zi4ZFM6LQ6WMAg0lMOMZwfUgZkeI0p2hpErAOinOYdsbJV2NckDJiD58x8ETTr2MC7KOHMTIbMRVIBfE5zzyhDRtlFzu5sREjNwxI8Sl9Tjp6LdVS9qPqZ4PFIJ8Qd3dpLjuinGbA2wqFUpqIBjr1RLgzFAuGJJSUpYTwHLyTINexHFuEy1Xv86H3vrFULLgntjueiLQENCmEpQxzzZhdu5WezORNWasjyPEFvztzByp/7OdtZK0XFJL+TYNbkq3uVetaNJRs3ZeYWrkye2dN1Cq18B5jzFTcNQSg8xH7vVwVEC8kj6fiYS/HSNEe7o3ljNm8h8sSFBmxw+8E/hCD3tE4mnhua0hza1tKueyNhl5N7Y1ZygNzkt7yQgEI8jrR2qyy1K7oYHegkoGZ4n/LM2t5MyS7W3Zvioft3kjwpW2z+YWiqIYkOWEfNNoQwNN8QLjWCk2+0r21zWnNrJ6/d21hOvso/yA3sXpvNRmO6/Y/LcGCcTtT41BBjGGyx8ruOkq7V8gToZ6Y00oXLt6/uybQhCY0IZjJ/TGdqbxLnopHtGp9LFL0g70ZdZ6t2pRlZ22JRENOa2x+Oqu51qqJB7kHGacVC7UGPLanziEnJpvZ5RV0Qa50Z7klGAnoWsm6la5daKESRU0GvV9/fbSxGgBSXs4CKSYyt9dCMixbA0H5KL9x0ykiWmfEaRlmwSs3LbrZbEO2E6p3FJkqa2bNhSJUIwSHO5OtTns+t1ryMEURJclkAEgi6x+KAhA12RkUz3cNbHViZFr/LhqW9HJYkC47JjGeSCyi2vHu/s3raXBzcXxFesdEEoMAolyFNItQCf3k9t729Z676T8fFK06Uwh09wHZpBXJ8Js92122302fn1oyZH0VBQEUed96pDI+Fngt5UbcWvxteqkoRQOVvG3JcrN2CAa7dlTeeaYanfvrYdaUjZxtkbYhj+rn1sZFdQT7OpxWybr6cPhRSfmEs8Bj+1i5T6EpiOqOtOlOa3Tusj9CsMKsDZlmAYmvKDp0J20zxevzJcs3KSUzjiXzTDSTxIJw5aTNGCuGbCbxx8naEIOR5qKyLoZpNpORWUbA2SfXmCPpl8hCjC8vF5XtaqPkD5FMMg6gDXMMVtjBPl8Ia6WHOftZMpoy+EeuwlDZEotfeZl4Y4ylDnYcSNhFhOLK7MRqw6hI7nLJ/ukcK2Nc4pSfLR16qrLbRxd8BlucY9ouuGS57jL5galmEtmWRsUwABqjXFg3ypHbfEv+Sc7jBiJY5CyLTgEsoVILX+Rc07M0WozA4DuurXeULRkCKPK1q6b0kLy5VswUM8VMcaVQrL/fFb/wE2r923Hj+2SJM+j1ClYpbizeTDuhyJQ8c0ugOM9X5N2fp5WDYphjABlusIWd3rExVNbMlR/L+5Pb4Ge+ZNWesQbiwowQZLdXBSNcj4doLHGWb8hWAlALqWAKXGeaHhI0LxLFP5zhoteVQb3LAtjGW5wkCb6fqRLFPc5xgcVagCfENUzQywleJIUOHjcTAglkmeRvLjFdtUg/yIahXfRziD66iRJEli9wLAqsMMM4I4w7VcKQ92RNXkVBG5tJ0kUMHUWeNI+Z5bEd5EYAH4i/crNj/gdaWRGlVNOfiAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMy0yOFQxMDoxNzoxNSswMDowMCgq5SUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDMtMjhUMTA6MTc6MTUrMDA6MDBZd12ZAAAAAElFTkSuQmCC"}
        }],
        itemNames: [{ type: String }],
        webTokens: [{ type: String }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)