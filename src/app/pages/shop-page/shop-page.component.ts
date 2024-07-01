import { Component, OnInit } from '@angular/core';
import { TicketModel } from '../../models/ticket.model';
import { TicketCardComponent } from '../../components/ticket-card/ticket-card.component';
import { NgForOf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CreateTicketComponent } from '../../components/create-ticket/create-ticket.component';

@Component({
    selector: 'app-shop-page',
    standalone: true,
    imports: [TicketCardComponent, NgForOf, ButtonModule, DialogModule, CreateTicketComponent],
    templateUrl: './shop-page.component.html',
    styleUrl: './shop-page.component.css',
})
export class ShopPageComponent implements OnInit {
    tickets: TicketModel[] = [];
    visible = false;

    ngOnInit() {
        for (let i = 0; i < 10; i++) {
            this.tickets.push({
                poiId: i,
                title: 'Ticket ' + i,
                nbrPeople: 2,
                stock: 300,
                price: i * 10,
                description: 'Description ' + i,
                image: {
                    url: 'https://picsum.photos/200/300',
                },
            });
        }
    }
}
