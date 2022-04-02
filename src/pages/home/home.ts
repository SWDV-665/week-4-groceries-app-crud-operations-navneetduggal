import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public alertCtrl: AlertController, 
    public dataService: GroceriesServiceProvider,
    public inputDialogService: InputDialogServiceProvider,
    public modal: ModalController) {
    
  }

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);  
  }

  editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    // this.inputDialogService.showPrompt(item, index);
    const myModal = this.modal.create('ModalPage', {item: item, index:index});
    myModal.present();
    this.loadItems();
  }  

  addItem() {
    console.log("Adding Item");
    const myModal = this.modal.create('ModalPage');
    myModal.present();
    this.loadItems();
    // this.inputDialogService.showPrompt();
  }
    

}
