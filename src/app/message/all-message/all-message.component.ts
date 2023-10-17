import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-message',
  templateUrl: './all-message.component.html',
  styleUrls: ['./all-message.component.scss']
})
export class AllMessageComponent {
  messages1!: Message[];

  messages2!: Message[];

  ngOnInit() {
      this.messages1 = [
          { severity: 'success', summary: 'Success', detail: 'Message Content' },
          { severity: 'info', summary: 'Info', detail: 'Message Content' },
      ];

      this.messages2 = [
          { severity: 'warn', summary: 'Waning', detail: 'Closable Message Content' },
          { severity: 'error', summary: 'Error', detail: 'Closable Message Content' },
      ];
  }
}
