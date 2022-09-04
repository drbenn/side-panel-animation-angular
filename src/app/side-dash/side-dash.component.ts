import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationEvent,
} from "@angular/animations";

@Component({
  selector: "app-side-dash",
  templateUrl: "./side-dash.component.html",
  styleUrls: ["./side-dash.component.css"],
  animations: [
    trigger("dashSlide", [
      state(
        "out",
        style({
          "background-color": "rgb(79, 119, 94)",
          transform: "translate(0px,0px",
        })
      ),
      state(
        "hidden",
        style({
          "background-color": "rgb(29, 48, 36)",
          transform: "translate(450px,0px",
        })
      ),
      transition("out <=> hidden", animate(800)),
    ]),
  ],
})
export class SideDashComponent implements OnInit {
  slidePosition = "out";
  drawerSymbol = ">>";
  containerWidth = "500px";
  checkboxDefaults = ["Kevin", "Mary", "jeff"];
  selectedCheckboxes = [...this.checkboxDefaults];

  onAnimate(event: AnimationEvent) {
    if (this.slidePosition == "out") {
      this.slidePosition = "hidden";
      this.drawerSymbol = "<<";
      console.log(event);
    } else {
      this.slidePosition = "out";
      this.drawerSymbol = ">>";
      this.containerWidth = "500px";
    }
  }

  public handleDone(event: AnimationEvent): void {
    // console.group("Done animating");
    // console.log("From:", event.fromState);
    // console.log("To:", event.toState);
    // console.log("Actual State:", this.slidePosition);
    if (this.slidePosition != "out") {
      this.containerWidth = "50px";
    }
  }

  toggle(name: string) {
    console.log(`name of clicked checkbox ${name}`);

    console.log(`default checkboxes: ${this.checkboxDefaults}`);
    console.log(
      `selected checkboxes before function: ${this.selectedCheckboxes}`
    );
    let nameIndex = this.selectedCheckboxes.indexOf(name);
    // console.log(nameIndex);
    nameIndex < 0
      ? this.selectedCheckboxes.push(name)
      : this.selectedCheckboxes.splice(nameIndex, 1);
    console.log(
      `selected checkboxes after function: ${this.selectedCheckboxes}`
    );
  }

  constructor() {}

  ngOnInit() {}
}
