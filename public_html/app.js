/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('Juniper', [])
        .controller('JuniperController', ['$scope', function ($scope) {
                $scope.attributes = {
                    model: null,
                    availableOptions: [
                        {id: "attribute", name: 'Select'},
                        {id: "time", name: 'time'},
                        {id: "source_vn", name: 'source_vn'},
                        {id: "destination_vn", name: 'destination_vn'},
                        {id: "source_port", name: 'source_port'},
                        {id: "destination_port", name: 'destination_port'},
                        {id: "traffic", name: 'traffic'},
                    ]
                };
                $scope.clause = {
                    model: null,
                    availableOptions: [
                        {name: 'Clause'},
                        {name: 'AND'},
                        {name: 'OR'},
                    ]
                };
                $scope.operator = {
                    model: null,
                    availableOptions: [
                        {id: "Operator", name: 'Operator'},
                        {id: "=", name: 'EQUAL'},
                        {id: "!=", name: 'NOT EQUAL'},
                    ]
                };
                $scope.generateQuery = function () {
                    var attributes = document.getElementsByName("attribute");
                    var values = document.getElementsByName("values");
                    var clauses = document.getElementsByName("clause");
                    var operators = document.getElementsByName("operator");
                    return createQuery(attributes, values, clauses, operators);
                };
                function createQuery(attributes, values, clauses, operators) {
                    var result = {};
                    var and = [];
                    var or = [];
                    var whereClause = [];
                    result.table_name = "traffic_table";
                    result.start_time = (new Date).getTime();
                    result.select_field = ["time", "source_vn", "destination_vn", "source_port", "destination_port", "traffic"];
                    for (var i = 0; i < values.length; i++) {
                        if (clauses[i].value == "Clause" || operators[i].value == "Operator" || attributes[i].value == "Select")
                        {
                        } else if (clauses[i].value == "AND") {
                            var andObject = {};
                            andObject.name = attributes[i].value;
                            andObject.value = values[i].value;
                            andObject.operator = operators[i].value;
                            and.push(andObject);
                        } else if (clauses[i].value == "OR") {
                            var orObject = {};
                            orObject.name = attributes[i].value;
                            orObject.value = values[i].value;
                            orObject.operator = operators[i].value;
                            or.push(orObject);
                        }
                    }
                    whereClause.push(and);
                    whereClause.push(or);
                    result.where_clause = whereClause;
                    result.end_time = (new Date).getTime();
                    console.log(JSON.stringify(result));
                    document.getElementById("displayQuery").innerHTML = JSON.stringify(result, null, 8);
                    return result;
                }
                ;
            }]);



