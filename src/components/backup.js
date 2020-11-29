<Row>
                                    <Col xs={1}  >

                                    </Col>
                                    <Col xs={9}>
                                        <div className="navbar">
                                            Total Count:- {this.state.tot_stats} {" "}
                             As on Date:- {this.state.tot_date}

                                        </div>
                                    </Col>
                                    <Col xs={2} >
                                        <img style={{ width: '40px', flex: 1 }} alt="Have a Chat with our Bot"
                                            src={chatpic}
                                            onClick={() => this.openHelp()}  //updateFilter is wierd name
                                        />
                                    </Col>

                                </Row>
                  
                  
                    
                  
                    <div class="row">
                      <div class="col-sm-5 bg-info rounded text-light">
                        <h3 class="util-text">Instruction to Hex</h3>
                        <p class="util-text">ex: add t1, t2, t3, addi $7, $8, 0xFFFF, j 0x000000</p>
                          <input class="form-control" placeholder="Instruction" id="inputInstruction" />
                    
                          <div class="form-check">
                                <input type="radio" checked="checked" class="form-check-input" name="optradio">Register Numbers (ex $2)</input>
                          
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="optradio">Register Names (ex v0)
                              
                            </div>
                          <button type="submit" class="btn btn-light" onclick="instToHex()">Convert!</button>
                     
                      </div>
                      <div class="col-sm-2"></div>
                      <div class="col-sm-5 bg-info rounded text-light">
                          <h3 class="util-text">Hex to Instruction</h3>
                          <p class="util-text">ex: 0x014B4820, 0x0BFF0000</p>
                            <input class="form-control" placeholder="Hex" id="hex"></input>
                            <div class="form-check">
                                  <input type="radio" checked="checked" class="form-check-input" name="optradio" id="num_rad">Register Numbers (ex $2)</input>
                             
                              </div>
                              <div class="form-check">
                                  <input type="radio" class="form-check-input" name="optradio">Register Names (ex v0)</input>
                             
                              </div>
                            <button type="submit" class="btn btn-light" onclick="hexToInst()">Convert!</button>
                         
                        </div>
                  
                      
                  </div>
                  <div class="col-sm-12 bg-secondary rounded text-light">
                     
                      <h3 id="resultsHeader">Results:</h3>
                      <h5 class="util-text"> <span id="outInst">No results yet...run a conversion!</span> </h5>
                      <h5 class="util-text"> <span id="output"></span> </h5>
                      <h5 class="util-text"> <span id="test"></span> </h5>
                  </div>
                  
                  <div class="col-sm-12"> 
                      <p style="text-align: center; font-size: small;">Disclaimer: It is a group project done by 4 student of CSU Ohio. They are Abhinav, Abhijeet, Ankur and Lokaranjan.
                      </p>       
                     
                  </div>
                    <p class="footer-text">©️ copyright 2020</p>
                  </div>

                           
                    : <span><img alt="Loading" src={loaderImg}></img></span>
                }
                
               