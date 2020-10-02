import { Component, OnInit } from '@angular/core';

interface Citation {
  link: string;
  text: string;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  references: Citation[] = [
    {
      link : "https://www.journalism.org/2016/12/15/many-americans-believe-fake-news-is-sowing-confusion/",
      text : "Barthel, M., Mitchel, A., & Holcomb, J. (2016). Many Americans Believe Fake News Is Sowing Confusion. Retrieved October 01, 2020."
    },
    {
      link : "https://www.journalism.org/2020/06/29/three-months-in-many-americans-see-exaggeration-conspiracy-theories-and-partisanship-in-covid-19-news/",
      text : "Mitchell, A., Jurkowitz, M., Oliphant, J. B., & Shearer, E. (2020, June 29). Three Months In, Many Americans See Exaggeration, Conspiracy Theories and Partisanship in COVID-19 News. Retrieved October 01, 2020."
    },
    {
      link : "https://asistdl.onlinelibrary.wiley.com/doi/full/10.1002/pra2.2015.145052010082",
      text : "Conroy, N. K., Rubin, V. L., & Chen, Y. (2015). Automatic deception detection: Methods for finding fake news. Proceedings of the Association for Information Science and Technology, 52(1), 1-4."
    },
    {
      link : "https://www.sciencedirect.com/science/article/pii/S1877050918318210",
      text : "Aldwairi, M., & Alwahedi, A. (2018). Detecting fake news in social media networks. Procedia Computer Science, 141, 215-222."
    },
    {
      link : "https://arxiv.org/abs/1705.00648v1",
      text : "Wang, William. (2017). \"Liar, Liar Pants on Fire\": A New Benchmark Dataset for Fake News Detection. 422-426. 10.18653/v1/P17-2067."
    },
    {
      link : "https://dl.acm.org/doi/abs/10.1145/3289600.3291382",
      text : "Zhou, Xinyi, et al. “Fake News: Fundamental Theories, Detection Strategies and Challenges.” Proceedings of the Twelfth ACM International Conference on Web Search and Data Mining, 2019, doi:10.1145 /3289600.3291382."
    }
  ];

  constructor() { }

  ngOnInit(): void {
    //Run when the shit starts

  }

  refIndex(name: string): number {
    return this.references.map(ref => ref.text.substring(0,ref.text.substring(0).search(/\W/))).indexOf(name) + 1;
  }

  cite(name: string): string {
    let ind: number = this.refIndex(name);
    return "<a href='#ref" + ind + "'><sup>[" + ind + "]</sup></a>";
  }

}
