import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/common/ws/pack.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pack } from 'src/app/common/model/pack';
import { PackItem } from 'src/app/common/model/pack-item';

@Component({
	selector: 'app-pack-view',
	templateUrl: './pack-view.component.html',
	styleUrls: ['./pack-view.component.scss']
})
export class PackViewComponent implements OnInit {

	packList: Pack[] = [];

	constructor(private packService: PackService, private snackBar: MatSnackBar) { }

	ngOnInit(): void {

		this.packService.getAllDefaultPacks().subscribe((data: Pack[]) => {
			this.packList = data;
		}, error => {
			this.snackBar.open('Cannot load packs', 'OK');
		});
	}

	deletePackItem(pack: Pack, packItem: PackItem) {
		//remove the item from the packlist
		pack.packItems = pack.packItems.filter(item => item !== packItem);
	}

	updatePack(pack: Pack) {
		this.packService.updateDefaultPack(pack).subscribe(data=>{
			this.snackBar.open('Pack was updated', 'OK');
		}, error => {
			this.snackBar.open('Pack update failed', 'OK');
		});
	}

	deletePack(pack: Pack) {
		pack.active = false;
		this.packService.updateDefaultPack(pack).subscribe(data=>{
			this.snackBar.open('Marked as deactived', 'OK');
		}, error => {
			this.snackBar.open('Cannot mark as deactivated', 'OK');
		});
	}
}
