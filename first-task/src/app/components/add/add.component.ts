import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  articles:any[] = [
    {
      title: 'industrial automation',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste eius distinctio dolor. Vel quo, quod facere iusto voluptas blanditiis voluptates cupiditate est sunt modi, voluptatem in veritatis quisquam quos!',
      link: 'https://www.m7mdsami.com/'
    },
    {
      title: 'industrial automation',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste eius distinctio dolor. Vel quo, quod facere iusto voluptas blanditiis voluptates cupiditate est sunt modi, voluptatem in veritatis quisquam quos!',
      link: 'https://www.m7mdsami.com/'
    },
    {
      title: 'industrial automation',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste eius distinctio dolor. Vel quo, quod facere iusto voluptas blanditiis voluptates cupiditate est sunt modi, voluptatem in veritatis quisquam quos!',
      link: 'https://www.m7mdsami.com/'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  add(form: NgForm) {
    let data = form.value;
    this.articles = [...this.articles, data];
    form.reset()
  }

  remove(index){
    this.articles.splice(index, 1);
  }
}
