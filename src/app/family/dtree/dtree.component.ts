import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as dTree from 'd3-dtree';
import TreeBuilder from './builder.js';
import { ParentalService } from '../services/ptree.service';

@Component({
  selector: 'app-dtree',
  templateUrl: './dtree.component.html',
  styleUrls: ['./dtree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DtreeComponent implements OnInit {
  public treeData;
  public treeDataArray: any[] = [];
  public memberData: any[] = [];

  constructor(private parentalService: ParentalService) { }

  ngOnInit() {
    const parent = this;
    this.parentalService.getGlobalTreeData().subscribe(res => {
      this.treeDataArray = res;
      this.initTree(res, parent);
    });
    console.log('parent.memberData ', this.memberData);
    console.log('getGlobalTreeData ', this.treeDataArray);
  }

  initTree(res, parent) {
    this.treeData = res;
    const self = this;
    this.parentalService.getTreeSubjectData(this.memberData);

    dTree.init(this.treeData, {
      target: '#graph',
      debug: true,
      height: 800,
      width: 1500,
      nodeWidth: 300,
      nodeHeight: 300,
      styles: {
        node: 'node',
        linage: 'linage',
        marriage: 'marriage',
        text: 'nodeText'
      },
      callbacks: {
        nodeRenderer: function nodeRenderer(name, x, y, height, width, extra, id, nodeClass, textClass, textRenderer) {
          // console.log('textRenderer ', name, ' \n extra ', extra, ' \n nodeClass ', nodeClass, ' \n height ', height);
          console.log(
            'textRenderer ', name,
            '\n extra ', extra,
            '\n nodeClass ', nodeClass,
            '\n height ', height,
            '\ntext class', textClass);
          return TreeBuilder._nodeRenderer(name, x, y, height, width, extra, id, nodeClass, textClass, textRenderer);
        },
        nodeSize: function nodeSize(nodes, width, textRenderer) {
          // console.log('name ', TreeBuilder._nodeSize(nodes, width, textRenderer));
          return TreeBuilder._nodeSize(nodes, width, textRenderer);
        },
        nodeClick: function (name, extra) {
          console.log('nodeClick ', name, ' extra ', extra);
          self.parentalService.openModal(name, extra);
        },
        textRenderer: function (name, extra, textClass) {
          // if (name !== '') {
          //  console.log('name ', name, ' extra ', extra, 'textClass ', textClass);
          // }

          function exists() {
            return parent.memberData.some(x => x.name === name);
          }

          if (!exists()) {
            if (name !== '') {
              parent.memberData.push({
                name: name,
                extra: [Object.values(extra)]
              });
            }
          }

          if (extra) {
            // extra = extra.born;
          } else {
            extra = '\n';
          }

          const markup =
            `<div class='class='title'>
              <div align='center' class='class'> ${name}
              <div align='center'>${extra.born}</div>
              <div align='center'>${extra.cityOfBirth}</div>
              <div align='center'>${extra.stateOfBirth}</div>
              </div>
          </div>`;
          return markup;
        }
      }
    });
  }
}
