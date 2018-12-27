import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SimpleJsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-simple-json',
  templateUrl: 'simple-json.html',
})
export class SimpleJsonPage {
  returnMsg = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : HttpClient) {
  this.getJsonObject();}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimpleJsonPage');
  }
  getJsonObject(){
    let url ='http://localhost/shop/ion-get-simple-string.php';

    this.http.get(url).subscribe(
      (data: any) =>{
        console.log(data);
        this.returnMsg = data.return_message;
      }
      ,(error) => {console.log(error);}
    );
  }

}//end class
