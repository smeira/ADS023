package br.iesb.ads023.atividade12
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState);
        this.title = "Atividade 11"
        println("onCreate disparado...")
        setContentView(R.layout.activity_main);
    }

    override fun onStart() {
        super.onStart()
        println("onStart disparado...")
    }

    override fun onResume() {
        super.onResume()
        println("onResume disparado...")
    }

    override fun onPause() {
        super.onPause()
        println("onPause disparado...")
    }

    override fun onStop() {
        super.onStop()
        println("onStop disparado...")
    }

    override fun onDestroy() {
        super.onDestroy()
        println("onDestroy disparado...")
    }
}