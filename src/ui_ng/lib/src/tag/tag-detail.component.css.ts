export const TAG_DETAIL_STYLES: string = `
.overview-section {
    padding-bottom: 36px;
}

.detail-section {
    background-color: #fafafa;
    padding-left: 12px;
    padding-right: 24px;
}

.title-block {
    display: inline-block;
}

.tag-name {
    font-weight: 300;
    font-size: 32px;
}
.tag-name h2{margin-top:0;}

.tag-timestamp {
    font-weight: 400;
    font-size: 12px;
    margin-top: 6px;
}

.rotate-90 {
    -webkit-transform: rotate(-90deg);
    /*Firefox*/
    -moz-transform: rotate(-90deg);
    /*Chrome*/
    -ms-transform: rotate(-90deg);
    /*IE9 、IE10*/
    -o-transform: rotate(-90deg);
    /*Opera*/
    transform: rotate(-90deg);
}

.arrow-back {
    cursor: pointer;
}

.arrow-block {	
    border-right: 2px solid #cccccc;	
    margin-right: 6px;	
    display: inline-flex;	
    padding: 6px 6px 6px 12px;	
}	
	
.title-block {	
    display: inline-block;	
}


.vulnerability-block {
    margin-bottom: 12px;
}

.summary-block {
    margin-top: 24px;
    display: flex;
    flex-wrap: row wrap;
}

.image-summary {
    margin-right: 36px;
    margin-left: 18px;
}

.flex-block {
    display: inline-flex;
    flex-wrap: row wrap;
    justify-content: space-around;
}

.vulnerabilities-info {
    padding-left: 24px;
}

 .third-column {
    margin-left: 36px;
}
.vulnerability{
margin-left: 50px;
    margin-top: -12px;
    margin-bottom: 20px;}

.vulnerabilities-info .second-column {
    text-align: left;
    margin-left: 6px;
}

.fourth-column{
float: left;
margin-left:20px;}

.vulnerabilities-info .second-row {
    margin-top: 6px;
}

.detail-title {
    float:left;
    font-weight: 600;
    font-size: 14px;
}

.image-detail-label {
    margin-right: 10px;
    text-align: left;
    font-weight: 600;
}

.image-detail-value {
    text-align: left;
    margin-left: 6px;
    font-weight: 500;
}
.tip-icon-medium {
    color: orange;
}
.tip-icon-low{
    color:yellow;
}
.second-column div, .fourth-column div, .image-detail-value div{
height: 24px;
}

`;