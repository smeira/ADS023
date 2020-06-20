package com.iesb.ads03.atividade15

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.KeyEvent
import android.view.MotionEvent
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class EventActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_event)

        val botao = findViewById(R.id.button) as Button

        botao.setOnClickListener {
            val toast = Toast.makeText(this, "onClick disparado...", Toast.LENGTH_SHORT)
            toast.show()
        }

        botao.setOnLongClickListener {
            val toast = Toast.makeText(this, "onLongClick disparado...", Toast.LENGTH_SHORT)
            toast.show()
            return@setOnLongClickListener true
        }

        botao.setOnTouchListener { view: View, motionEvent: MotionEvent ->
            val toast = Toast.makeText(this, "onTouch disparado...", Toast.LENGTH_SHORT)
            toast.show()
            return@setOnTouchListener true
        }

        val campo = findViewById<EditText>(R.id.editText)
        campo.setOnFocusChangeListener { view: View, b: Boolean ->
            val toast = Toast.makeText(this, "onFocusChange disparado...", Toast.LENGTH_SHORT)
            toast.show()
        }

        campo.setOnKeyListener {  v, keyCode, event ->
            if (keyCode == KeyEvent.KEYCODE_ENTER) {
                val toast = Toast.makeText(getApplicationContext(), "onKey disparado...", Toast.LENGTH_SHORT)
                toast.show()
                botao.requestFocus()
                return@setOnKeyListener true
            }
            return@setOnKeyListener false
        }
    }
}
