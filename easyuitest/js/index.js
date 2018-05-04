define([
    "jquery",
    "easyui",
    "zhCN",
    "global",
    ], function ($, easyui, zhcn, global) {
        window.crudyy = {};
        window.crudyy.newUser = function(){
        $('#dlg').dialog('open').dialog('setTitle','New User');
            $('#fm').form('clear');
            url = 'save_user.php';
        };
        window.crudyy.editUser = function() {
            var row = $('#dg').datagrid('getSelected');
            if (row) {
                $('#dlg').dialog('open').dialog('setTitle', 'Edit User');
                $('#fm').form('load', row);
                url = 'update_user.php?id=' + row.id;
            }
        };

        window.crudyy.saveUser = function (){
            $('#fm').form('submit',{
                url: url,
                onSubmit: function(){
                    return $(this).form('validate');
                },
                success: function(result){
                    var result = eval('('+result+')');
                    if (result.errorMsg){
                        $.messager.show({
                            title: 'Error',
                            msg: result.errorMsg
                        });
                    } else {
                        $('#dlg').dialog('close');		// close the dialog
                        $('#dg').datagrid('reload');	// reload the user data
                    }
                }
            });
        };

        window.crudyy.destroyUser = function (){
            var row = $('#dg').datagrid('getSelected');
            if (row){
                $.messager.confirm('Confirm','Are you sure you want to destroy this user?',function(r){
                    if (r){
                        $.post('destroy_user.php',{id:row.id},function(result){
                            if (result.success){
                                $('#dg').datagrid('reload');	// reload the user data
                            } else {
                                $.messager.show({	// show error message
                                    title: 'Error',
                                    msg: result.errorMsg
                                });
                            }
                        },'json');
                    }
                });
            }
        };

        window.crudyy.doSearch = function(){
            $('#dg').datagrid('load',{
                itemid: $('#itemid').val(),
                language:$('#language').combobox('getValue'),
                starttime:$('#starttime').combobox('getValue'),
                endtime:$('#endtime').combobox('getValue')
            });
        };

        window.crudyy.addTab = function(title, url){
            if ($('#tt').tabs('exists', title)){
                $('#tt').tabs('select', title);
            } else {
                var content = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:98%;"></iframe>';
                $('#tt').tabs('add',{
                    title:title,
                    content:content,
                    closable:true
                });
            }
        };
        window.crudyy.showcontent = function(language){
            $('#content').html('Introduction to ' + language + ' language');
        };

        window.crudyy.formatPrice = function (val,row){
            if (val < 3){
                return '<span style="color:red;">('+val+')</span>';
            } else {
                return val;
            }
        };

        //将表单改为ajax提交
        $('#ff').form({
            success:function(data){
                $.messager.alert('Info', data, 'info');
            }
        });

    });