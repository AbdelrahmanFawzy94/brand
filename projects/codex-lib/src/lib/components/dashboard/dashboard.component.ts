import { OnInit, Component, ElementRef, Inject, Input, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedLanguageMenuComponent } from '@committee-shared';
import { TranslateModule } from '@ngx-translate/core';
import { IDashboardDropDowns, IDashboardUser, SharedIconComponent, SharedStopProbagationDirective } from '@library';
// import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatBadgeModule,
    OverlayModule,
    TranslateModule,
    // A11yModule, // for search focus
    SharedIconComponent,
    SharedLanguageMenuComponent,
    SharedStopProbagationDirective,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedDashboardComponent implements OnInit {
  @Input({ required: true }) menu: IDashboardDropDowns[] = [];
  @Input() user!: IDashboardUser;
  @Output() onSearch = new EventEmitter<string>();
  @ViewChild('links') linksDivElement!: ElementRef<HTMLDivElement>;
  @ViewChild('searchField') searchField!: MatInput;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  searchInput = '';
  searchIsVisible: boolean = false;

  sideNavStatus: 'opened' | 'collapsed' | 'closed' = 'closed';

  constructor(
    @Inject(DOCUMENT)
    private _Document: Document
  ) {}

  ngOnInit(): void {
    this.setInitialSideNavWidth();
  }

  setInitialSideNavWidth() {
    this._Document.documentElement.style.setProperty('--sideNavWidth', '0px');
  }

  toggleSideNav() {
    switch (this.sideNavStatus) {
      case 'closed':
        this.sideNavStatus = 'collapsed';
        this._Document.documentElement.style.setProperty('--sideNavWidth', '60px');
        break;
      case 'collapsed':
        this.sideNavStatus = 'opened';
        this._Document.documentElement.style.setProperty('--sideNavWidth', '250px');
        break;
      case 'opened':
        this.sideNavStatus = 'closed';
        this._Document.documentElement.style.setProperty('--sideNavWidth', '0px');
        this.accordion.closeAll();
        break;
      default:
        break;
    }
  }

  openSideNave() {
    if (this.sideNavStatus !== 'opened') {
      this.sideNavStatus = 'opened';
      this._Document.documentElement.style.setProperty('--sideNavWidth', '250px');
    }
  }

  clearSearchInput() {
    this.searchInput = '';
  }

  toggleSearch() {
    this.searchIsVisible = !this.searchIsVisible;
    if (this.searchIsVisible)
      setTimeout(() => {
        this.searchField.focus();
      }, 100);
  }

  hideSearch() {
    this.searchIsVisible = false;
  }

  search() {
    this.onSearch.emit(this.searchInput);
  }

  activeChange(linkIsActive: boolean, parentElementId?: string) {
    if (linkIsActive && parentElementId) {
      // TODO need to be tested
      this.linksDivElement.nativeElement.querySelectorAll('[custom-id]').forEach((element) => {
        element?.classList.remove('link-active');
      });
      this.linksDivElement.nativeElement.querySelector('[custom-id="' + parentElementId + '"]')?.classList.add('link-active');
    }
  }

  toggleFullScreen() {
    if (!this._Document.fullscreenElement) {
      this._Document.documentElement.requestFullscreen();
    } else if (this._Document.exitFullscreen) {
      this._Document.exitFullscreen();
    }
  }
}
