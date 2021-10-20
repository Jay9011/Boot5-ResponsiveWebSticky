document.addEventListener('DOMContentLoaded', (e) => {
    let _page = 0;
    let _isLastData = false;
    let _requestDataTable = {

    };
    IntersectionObserver.prototype.POLL_INTERVAL = 300;
    // IntersectionObserver.prototype.USE_MUTATION_OBSERVER = false;
    const iobserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            let limit = 0;
            while (entry.isIntersecting) {
                createCard(`#card-box`, {
                    status: 0
                });
                limit++;
                if (limit > 10) {
                    break;
                }
            }
        });
    }, {
        root: null,
        rootMargin: '20px',
        threshold: 0
    });

    const cardEndEl = document.querySelector('#card-end');

    iobserver.observe(cardEndEl);
});

function createCard(parent, content) {
    const cardBox = document.querySelector(parent);
    if (!content.hasOwnProperty('uid') || _requestDataTable.hasOwnProperty(1)) {
        return false;
    }
    let cardDisplay = document.createElement('div');
    cardDisplay.classList.add('cardDisplay', 'row', 'g-0', 'bg-light', 'mb-2', 'mb-lg-1');
    cardDisplay.setAttribute('data-id', content['uid']);
    let classText = '';
    switch (String(content['status'])) {
        case '0':
            classText = 'btn-danger is-invalid';
            break;
        case '1':
            classText = 'btn-success is-valid';
            break;
        default:
            classText = 'btn-danger is-invalid';
            break;
    }
    let cardContent =
        '<div class="cardDisplayBtnBox col-auto d-flex justify-content-end">' +
        '      <button type="button"' +
        '          class="cardAgreeBtn btn btn-sm d-flex justify-content-center align-items-center ' + classText + '"' +
        '          data-status="' + content['status'] + '">' +
        '          <div class="is-invalid">' +
        '              승인 대기' +
        '          </div>' +
        '          <div class="is-request">' +
        '              승인 요청' +
        '          </div>' +
        '          <div class="is-valid">' +
        '              승인 완료' +
        '          </div>' +
        '      </button>' +
        '  </div>' +
        '  <div class="cardContent col px-2">' +
        '      <div class="row row-cols-lg-3 g-0 p-1" data-id="' + content['uid'] + '">' +
        '          <div class="cardViName col-12 col-lg my-1">' +
        '              <div class="">' + content['name'] + '</div>' +
        '          </div>' +
        '          <div' +
        '              class="cardViPhone col-12 col-lg mt-1 d-flex justify-content-start align-items-center">' +
        '              <div class="d-flex p-1">' +
        '                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"' +
        '                      width="1em" height="1em">' +
        '                      <path' +
        '                          d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5T1151 1520t-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5T344 904q-48-77-83-175-3-9-18-49t-20.5-55.5T208 577t-12.5-57.5T192 467q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" />' +
        '                  </svg>' +
        '              </div>' +
        '              <div class="">' + content['phone'] + '</div>' +
        '          </div>' +
        '          <div' +
        '              class="cardViDate col-12 col-lg d-flex justify-content-start align-items-center flex-wrap">' +
        '              <div class="d-flex p-1">' +
        '                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20"' +
        '                      width="1em" height="1em">' +
        '                      <g fill-rule="evenodd">' +
        '                          <path' +
        '                              d="M16 2h-1V0h-2v2H5V0H3v2H2C.9 2 0 2.9 0 4v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 16H2V7h14v11Z" />' +
        '                          <path d="M4 9h5v5H4z" />' +
        '                      </g>' +
        '                  </svg>' +
        '              </div>' +
        '              <div class="cardViStartTime  ">' +
        '                  ' + content['sdate'] + '' +
        '              </div>' +
        '              <div class="mx-1">' +
        '                  ~' +
        '              </div>' +
        '              <div class="cardViEndTime  ">' +
        '                  ' + content['edate'] + '' +
        '              </div>' +
        '          </div>' +
        '      </div>' +
        '      <div' +
        '          class="row row-cols-lg-3 g-0 p-1 justify-content-center align-items-end">' +
        '          <div' +
        '              class="cardIVDescription col-12 col-lg d-flex justify-content-lg-start align-items-center align-self-lg-end">' +
        '              ' + content['option1'] + '' +
        '          </div>' +
        '          <div' +
        '              class="cardIVName col-12 col-lg d-flex justify-content-end justify-content-lg-start align-items-center align-self-lg-end">' +
        '              ' + content['ivname'] + '' +
        '          </div>' +
        '          <div' +
        '              class="cardIVCompany col-12 col-lg d-flex justify-content-end justify-content-lg-start align-items-center align-self-lg-end">' +
        '              ' + content['ivcompany'] + '' +
        '          </div>' +
        '      </div>' +
        '  </div>';
    cardDisplay.innerHTML = cardContent;
    cardBox.appendChild(cardDisplay);
}