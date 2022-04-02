import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public quantity: number;
  public name: string;
  public index: number;
  public item:any = {};
  constructor(public navParams: NavParams, public view:ViewController,
    public dataService: GroceriesServiceProvider ) {
  }

  ionViewDidLoad() {
    //this.quantity = 1;
  }

  ionViewWillLoad(){
    if (this.navParams.get('item') !== undefined){
      this.item = this.navParams.get('item');
      this.quantity = this.item.quantity;
      this.name = this.item.name;
      this.index = this.navParams.get('index');
    }
    
    console.log(this.navParams.get('item'));
  }
  closeClick(){
    this.view.dismiss();
  }

  saveClick(){
      this.item.name = this.name;
      this.item.quantity = this.quantity;
    if (this.index !== undefined){
      this.dataService.editItem(this.item, this.index);
    }
    else{      
      this.dataService.addItem(this.item);      
    }
    this.view.dismiss();
  }
}
