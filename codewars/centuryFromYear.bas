Public Module Kata
    Public Function Century(ByVal year As Integer) As Integer

        If year Mod 100 = 0 Then
            Return year \ 100
        Else
            Return (year \ 100) + 1
        End If
        
    End Function
End Module