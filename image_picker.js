function ImagePickerCtrl($scope) {
    $scope.all_images = [1,2,3,4,5,6,7,8,9,10];

    $scope.selectImage = function (image) {
        if($scope.selected_image === image) {
            $scope.selected_image = '';
        }
        else {
            $scope.selected_image = image;
        }
    }
}