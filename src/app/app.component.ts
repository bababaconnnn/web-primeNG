import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app_primeNG';
  nodes!: TreeNode[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.nodes = [
      {
        key: '0',
        label: 'Component',
        icon: 'pi pi-compass',
        expanded: true,
        children: [
          { key: '0-0', label: 'Table', data: 'Table', type: 'route' },
          { key: '0-1', label: 'Button', data: 'Button', type: 'route' },
          { key: '0-2', label: 'Input', data: 'Input', type: 'route' },
          { key: '0-3', label: 'Chart', data: 'Chart', type: 'route' },
          { key: '0-4', label: 'Message', data: 'Message', type: 'route' },
        ]
      },
      {
        key: '1',
        label: 'Theme',
        icon: 'pi pi-image',
        children: [
          { key: '1-0', label: 'Change Theme', data: 'Change Theme', type: 'route' },

        ]
      },
      {
        key: '2',
        label: 'Use in project',
        icon: 'pi pi-star-fill',
        children: [
          { key: '1-0', label: 'Form', data: 'Form', type: 'route' },

        ]
      },
      {
        key: '3',
        label: 'Custom own component',
        icon: 'pi pi-save',
        children: [
          { key: '1-0', label: 'Use Custom Component', data: 'Use Custom Component', type: 'route' },

        ]
      }
    ];


  }

  onNodeSelect(event: any) {
    console.log(event);

    // Extract the target element from the event
    const target = event.target as HTMLElement;

    // Access the custom data attribute from the target element
    const data = target.getAttribute('data-node-data');
    const type = target.getAttribute('data-node-type');

    console.log(data, type);


    if (data === 'Table' && type === 'route') {
      this.router.navigate(['/Table']);
    } else if (data === 'Button' && type === 'route') {
      this.router.navigate(['/Button']);
    } else if (data === 'Input' && type === 'route') {
      this.router.navigate(['/Input']);
    } else if (data === 'Chart' && type === 'route') {
      this.router.navigate(['/Chart']);
    } else if (data === 'Message' && type === 'route') {
      this.router.navigate(['/Message']);
    } else if (data === 'Change Theme' && type === 'route') {
      this.router.navigate(['/Theme']);
    } else if (data === 'Form' && type === 'route') {
      this.router.navigate(['/Form']);
    }
    // Add more conditions for other sections as needed
  }
}
