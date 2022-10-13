import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../../shared/components/dialog/dialog.component";

export default class DialogHelper{

    constructor(){

    }
    
    static openDialog(item: any,dialog: any): void {
        const dialogRef:any =  dialog.open(DialogComponent, {
          width: '100%',
          data: item
        });
    
        dialogRef.afterClosed().subscribe((result:any) => {
          console.log('The dialog was closed');
          console.log(result)
        });
      
      }
}