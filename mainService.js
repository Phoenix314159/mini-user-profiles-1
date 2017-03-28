angular.module('userProfiles').service('mainService', function () {
    var data = [{
        "id": 0,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
        {
            "id": 1,
            "first_name": "lucille",
            "last_name": "bluth",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        },
        {
            "id": 2,
            "first_name": "oscar",
            "last_name": "bluth",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        }];
    this.getUsers = function () {
        return data;
    }
    this.firstLetterCaps = function (str) {
        return str.charAt(0).toUpperCase() + str.substr(1);
    }
    this.toggleFavorite = index => {
        data[index].isFavorite = !data[index].isFavorite;

    }
});